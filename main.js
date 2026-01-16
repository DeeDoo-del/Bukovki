const { app, BrowserWindow } = require('electron');
const path = require('node:path')

const createWindow = () => {
    const win = new BrowserWindow({
     width: 800,
     height: 600,
     webPreferences: {
        preload: path.join('preload.js')
     }   
    })
    win.loadFile('index.html')
}
app.whenReady().then(() =>{
createWindow();
console.log(window.sum);
})