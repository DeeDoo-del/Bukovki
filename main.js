const { app, BrowserWindow, ipsMain} = require('electron');
const path = require('node:path')

function handleSetTitle(event, title){
    const webContent = event.sender
    const win = BrowserWindow.fromWebContent(webContent)
    win.setTitle(title)
}

const createWindow = () => {
    const win = new BrowserWindow({
     width: 800,
     height: 600,
     webPreferences: {
        preload: path.join(__dirname, 'preload.js')
     }   
    })
    win.loadFile('index.html')
}
app.whenReady().then(() =>{
createWindow();
console.log(window.sum);
})