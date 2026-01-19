const {ipcRenderer, contextBridge} = require('electron/renderer');

contextBridge.exposeInMainWorld( "TestAPI",  {
  createFile: (fileName) => ipcRenderer.send("filesys:CreateFile", fileCreate)
})