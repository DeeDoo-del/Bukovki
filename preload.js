const { contextBridge } = require("electron");
/* window.sum = {
  summa: 5
} */
 contextBridge.exposeInMainWorld('sum',  {
  summa: 5
}) 