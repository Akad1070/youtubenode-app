import {app, BrowserWindow, ipcMain} from 'electron';
import path from 'path';



// Custom
import {server} from './server/utils/config';
import * as Server from './server/server';

// Keep a global reference of the window object, otherwise, the window will
// be closed automatically when the garbage collector pass.
let mainWindow = null; //Will be the main app' window





// Launch the Electron APP
app.on('ready', function() {
    mainWindow = new BrowserWindow({
        minWidth: 640,
        minHeight: 400,
        center : true,
        height: 600,
        width: 800,
        
        frame : false,
        autoHideMenuBar : true,
        darkTheme : true
    });
    
    
    //  Callback to start the server
    server.start(function (err,url) {
      if(err) return exitApp();
        //Start now the render process
        //mainWindow.loadURL('file://' + __dirname + '/server/public/index.html');
        mainWindow.loadURL(url);
    });

});


ipcMain.on('close-main-window', function () {
    app.quit();
});


const exitApp = function () {
  server.stop(function () {
    return process.exit();
  });
};

// If ctrl+c
process.on('SIGINT', exitApp); 
process.on('SIGTERM', exitApp); 
// If Exception 
process.on('uncaughtException', exitApp);