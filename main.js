const { app, BrowserWindow, ipcMain} = require('electron/main');
const path = require('node:path')

function handleSetTitle(event, title){
    const webContent = event.sender
    const win = BrowserWindow.fromWebContent(webContent)
    console.log(win)
    win.setTitle(title)
}

const createWindow = () => {
    const mainWindow = new BrowserWindow({
     width: 800,
     height: 600,
     webPreferences: {
        preload: path.join(__dirname, 'preload.js')
     }   
    })
    mainWindow.loadFile('index.html')
}
app.whenReady().then(() =>{
    ipcMain.on('set-title', handleSetTitle)
    createWindow();
})