import { app, BrowserWindow } from "electron";

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    autoHideMenuBar: true,
  });
  win.loadURL("https://www.perplexity.ai/search");
};

app.whenReady().then(() => {
  createWindow();
});
