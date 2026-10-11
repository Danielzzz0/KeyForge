# Contributing to KeyForge

## Before you start

- Search existing issues and pull requests before opening a new one.
- Keep each change focused on a single improvement or fix.
- Do not include GTA V game archives, extracted proprietary game files, or generated installers in commits.

## Local setup

```powershell
npm install
npm start
```

## Pull requests

1. Describe the user-facing change and how you tested it.
2. Keep UI changes accessible by keyboard where practical.
3. Run the relevant syntax checks before submitting:

   ```powershell
   node --check src/main.js
   node --check src/preload.js
   node --check src/renderer/app.js
   ```

4. Do not commit `node_modules`, `release`, `outputs`, or `work`.

## Reporting issues

Include the KeyForge version, Windows version, steps to reproduce, expected behavior, actual behavior, and screenshots when they help explain a UI issue.
