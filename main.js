const electron = require('electron');
var {app, BrowserWindow, ipcMain} = electron;
var path = require('path')
app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});
app.on('ready', ()=>{
	var mainWindow;
	var {width, height} = electron.screen.getPrimaryDisplay().workAreaSize;
	mainWindow = new BrowserWindow({width: width, height: height, 
					webPreferences: {plugins: true}
				});
	mainWindow.loadURL('file://' + __dirname + '/index.html');
	
	mainWindow.webContents.on('new-window', function(evt, url, frameName, disposition, options){
	  event.preventDefault();
		  
	});
    mainWindow.on('closed', function() {
		mainWindow = null;
   });
});