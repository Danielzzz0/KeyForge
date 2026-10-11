const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('keyforge', {
  platform: process.platform,
  openControlFile: () => ipcRenderer.invoke('control-file:open'),
  saveControlFile: (xml) => ipcRenderer.invoke('control-file:save', xml),
  exportOiv: (payload) => ipcRenderer.invoke('control-file:export-oiv', payload),
  copyShareCode: (code) => ipcRenderer.invoke('share-code:copy', code),
  readShareCode: () => ipcRenderer.invoke('share-code:read')
});
