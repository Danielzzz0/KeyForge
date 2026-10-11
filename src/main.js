const { app, BrowserWindow, clipboard, dialog, ipcMain } = require('electron');
const crypto = require('crypto');
const fs = require('fs/promises');
const os = require('os');
const path = require('path');
const { spawn } = require('child_process');

const appIconPath = app.isPackaged
  ? path.join(process.resourcesPath, 'keyforge-icon.ico')
  : path.join(__dirname, '..', 'assets', 'keyforge-icon.ico');

function createWindow() {
  const window = new BrowserWindow({
    width: 1460,
    height: 940,
    minWidth: 1120,
    minHeight: 720,
    backgroundColor: '#101218',
    icon: appIconPath,
    titleBarStyle: 'hidden',
    titleBarOverlay: {
      color: '#101218',
      symbolColor: '#f1f3f9',
      height: 44
    },
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false
    }
  });

  window.loadFile(path.join(__dirname, 'renderer', 'index.html'));
}

app.whenReady().then(() => {
  ipcMain.handle('control-file:open', async () => {
    const result = await dialog.showOpenDialog({
      title: 'Open exported GTA V control settings',
      properties: ['openFile'],
      filters: [{ name: 'GTA V control settings', extensions: ['meta', 'xml', 'txt', 'html'] }]
    });
    if (result.canceled) return { canceled: true };
    const filePath = result.filePaths[0];
    return { filePath, content: await fs.readFile(filePath, 'utf8') };
  });

  ipcMain.handle('share-code:copy', (_event, code) => {
    clipboard.writeText(String(code));
    return { copied: true };
  });

  ipcMain.handle('share-code:read', () => ({ code: clipboard.readText() }));

  ipcMain.handle('control-file:save', async (_event, xml) => {
    const result = await dialog.showSaveDialog({
      title: 'Export GTA V default.meta',
      defaultPath: 'default.meta',
      filters: [{ name: 'GTA V control settings', extensions: ['meta'] }]
    });
    if (result.canceled || !result.filePath) return { canceled: true };
    await fs.writeFile(result.filePath, xml, 'utf8');
    return { filePath: result.filePath };
  });

  ipcMain.handle('control-file:export-oiv', async (_event, { xml, profileName }) => {
    const result = await dialog.showSaveDialog({
      title: 'Build OpenIV package',
      defaultPath: `${toSafeFileName(profileName)}.oiv`,
      filters: [{ name: 'OpenIV package', extensions: ['oiv'] }]
    });
    if (result.canceled || !result.filePath) return { canceled: true };

    const stagingDirectory = await fs.mkdtemp(path.join(os.tmpdir(), 'keyforge-oiv-'));
    const packageZip = path.join(stagingDirectory, 'package.zip');
    const contentDirectory = path.join(stagingDirectory, 'content');
    try {
      await fs.mkdir(contentDirectory);
      await fs.writeFile(path.join(contentDirectory, 'default.meta'), xml, 'utf8');
      await fs.writeFile(path.join(stagingDirectory, 'assembly.xml'), buildOivAssembly(profileName), 'utf8');
      await createZip(stagingDirectory, packageZip);
      await fs.copyFile(packageZip, result.filePath);
      return { filePath: result.filePath };
    } finally {
      await fs.rm(stagingDirectory, { recursive: true, force: true });
    }
  });

  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

function buildOivAssembly(profileName) {
  const safeName = escapeXml(profileName || 'KeyForge controls');
  const packageId = crypto.randomUUID().toUpperCase();
  return `<?xml version="1.0" encoding="UTF-8"?>
<package version="2.2" id="{${packageId}}" target="Five">
  <metadata>
    <name>${safeName}</name>
    <version><major>1</major><minor>0</minor><tag>KeyForge</tag></version>
    <author><displayName>KeyForge</displayName></author>
    <description><![CDATA[Custom GTA V PC control settings exported by KeyForge. Install to the OpenIV mods folder only.]]></description>
  </metadata>
  <colors><headerBackground useBlackTextColor="False">$FF242018</headerBackground><iconBackground>$FFFFBE3C</iconBackground></colors>
  <content>
    <archive path="update\\update.rpf" createIfNotExist="False" type="RPF7">
      <add source="default.meta">x64\\data\\control\\default.meta</add>
    </archive>
  </content>
</package>`;
}

function toSafeFileName(profileName) {
  const fileName = String(profileName || 'KeyForge controls')
    .replace(/[<>:"/\\|?*\x00-\x1F]/g, '')
    .replace(/[. ]+$/g, '')
    .trim();
  return fileName || 'KeyForge controls';
}

function escapeXml(value) {
  return String(value).replace(/[<>&'\"]/g, (character) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', "'": '&apos;', '"': '&quot;' })[character]);
}

function createZip(stagingDirectory, outputPath) {
  const command = '$ErrorActionPreference = "Stop"; Get-ChildItem -LiteralPath $env:KEYFORGE_OIV_STAGE | Compress-Archive -DestinationPath $env:KEYFORGE_OIV_OUTPUT -CompressionLevel Optimal -Force';
  return new Promise((resolve, reject) => {
    const child = spawn('powershell.exe', ['-NoProfile', '-NonInteractive', '-Command', command], {
      windowsHide: true,
      env: { ...process.env, KEYFORGE_OIV_STAGE: stagingDirectory, KEYFORGE_OIV_OUTPUT: outputPath }
    });
    let error = '';
    child.stderr.on('data', (chunk) => { error += chunk; });
    child.on('error', reject);
    child.on('close', (code) => code === 0 ? resolve() : reject(new Error(error || `Package creation failed with exit code ${code}.`)));
  });
}
