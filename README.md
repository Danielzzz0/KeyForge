# KeyForge

KeyForge is a Windows desktop editor for GTA V PC keyboard and mouse control mappings. It lets players work with extracted `default.meta` files, maintain separate layouts, export OpenIV packages, and restore the bundled default layout.

> KeyForge is an independent community project. It is not affiliated with Rockstar Games, Take-Two Interactive, or OpenIV.

## Features

- Edit all 210 mappings from the supplied GTA V `default.meta` layout.
- Capture keyboard, mouse-button, and mouse-wheel bindings.
- Disable mappings without deleting the rest of a profile.
- Use profiles, share layout codes, and detect incomplete imports.
- Import `.meta`, `.xml`, `.txt`, and `.html` control-file exports.
- Export `default.meta` files or OpenIV `.oiv` packages.
- Build a bundled default-layout `.oiv` package to restore the original 210 mappings.

## Install

Download the latest `KeyForge-Setup-<version>.exe` from this repository's **Releases** page, run it, then launch KeyForge from the Start Menu or desktop shortcut.

Windows may show a reputation warning for unsigned builds. Only install releases downloaded from the official project release page.

## Using KeyForge

1. Use **File → Open meta** to load an extracted control file. Choose whether it replaces the active profile or creates a new one.
2. Select an action and capture a key, mouse button, or wheel direction. Turn on **Advanced mode** for source selection and raw RAGE codes.
3. Export with **File → Export meta**, or create an OpenIV installer using **File → Build .oiv package**.
4. In OpenIV, install packages to the `mods` folder rather than changing the original game archive.

The target control file is:

```text
Grand Theft Auto V/update/update.rpf/x64/data/control/default.meta
```

## Development

### Requirements

- Windows
- Node.js 22.12 or newer
- npm

### Run locally

```powershell
npm install
npm start
```

### Build a Windows installer

```powershell
npm run dist
```

The installer is created in `release/` as `KeyForge-Setup-<version>.exe`.

For a no-install executable:

```powershell
npm run dist:portable
```

## Releases

1. Update the `version` in `package.json`.
2. Run `npm run dist`.
3. Test the installer on a clean Windows account or virtual machine.
4. Create a GitHub release and upload the generated setup `.exe` from `release/`.
5. Include the SHA-256 checksum in the release notes.

## Security and GTA V files

KeyForge does not directly write into `update.rpf`. It exports a plain `default.meta` file or an OpenIV `.oiv` package for the user to install. Back up game and mod files before applying changes.

## Contributing

Contributions are welcome. Please read [CONTRIBUTING.md](CONTRIBUTING.md) before opening an issue or pull request.

## License

Distributed under the [MIT License](LICENSE).
