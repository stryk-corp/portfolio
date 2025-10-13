// main.js - minimal Electron main process example (safe, does not require launching here)
const { app, BrowserWindow, ipcMain } = require('electron');

function createWindow() {
  const win = new BrowserWindow({ width: 800, height: 600, webPreferences: { nodeIntegration: true, contextIsolation: false } });
  win.loadFile('index.html');
}


app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
// main.js
// REMOVED: Modernization toolkit content removed.

/* removed */