'use strict';


const app = require('app');
const BrowserWindow = require('browser-window');

let mainWindow = null; //Will be the main app' window



app.on('ready', function() {
    mainWindow = new BrowserWindow({
        height: 600,
        width: 800
    });
    //Start now the render process
    mainWindow.loadUrl('file://' + __dirname + '/app/public/index.html');
});