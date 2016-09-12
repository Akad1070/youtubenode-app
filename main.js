'use strict';


const app = require('app'); // Control the app Life
const BrowserWindow = require('browser-window'); // Create a native browser

// Keep a global reference of the window object, otherwise, the window will
// be closed automatically when the garbage collector pass.
var mainWindow = null; //Will be the main app' window



app.on('ready', function() {
    mainWindow = new BrowserWindow({
        minWidth: 640,
        minHeight: 400,
        
        height: 600,
        width: 800
    });
    //Start now the render process
    mainWindow.loadUrl('file://' + __dirname + '/app/public/index.html');
});