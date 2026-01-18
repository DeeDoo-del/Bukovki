const { contextBridge, ipcRender } = require("electron");

 contextBridge.exposeInMainWorld('electronAPI',  {
  
}) 