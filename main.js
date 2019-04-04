console.log('main javascript is working');

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require('path');
const url = require('url');

let win, dimensionWindow, colorWindow;

function createWindow() {
    //win = new BrowserWindow();
    //dimensionWindow = new BrowserWindow({width:400, height: 400, maxWidth: 600, maxHeight: 600});
    //colorWindow = new BrowserWindow({backgroundColor: '#FFFF00'});
    //framelessWindow = new BrowserWindow({backgroundColor: '#0000FF', frame: false});

    parentWindow = new BrowserWindow({title: 'Parent'});
    childWindow = new BrowserWindow({show: false, parent: parentWindow, title: 'Child', frame: true});
    childWindow.loadURL('http://localhost:8080/login');
    //shows window only when website has opened
    childWindow.show();
}

app.on('ready', createWindow);

//mac code
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

app.on('activate', () => {
    if (win === null) {
        createWindow()
    }
});

