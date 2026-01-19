const { app, BrowserWindow, ipcMain} = require('electron/main');
const path = require('node:path')
const fs = require('node:fs');

function handlecreateFile(event, fileName){
   const content = "Ура, сработало!"
   fs.writeFile('D:\Bukovki\src', content, err => {
        if (err) {
            console.error(err);
        } else {
            console.error("file written successfully");
        }
    });
}

const createWindow = () => {
const win = new BrowserWindow({
    webPreferences: {
        preload: path.join(__dirname, 'preload.js')
    }
})
    win.loadFile('index.html')
}

app.whenReady.then(() => {
    createWindow();
})