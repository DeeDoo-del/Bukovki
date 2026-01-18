const { contextBridge, ipcRender } = require("electron");

 contextBridge.exposeInMainWorld('electronAPI',  {
  setTitle: (title) => ipcRender.send("set-title", title)
}) 