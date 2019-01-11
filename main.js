const {app, BrowserWindow} = require('electron'); 

let win; 

function createWindow(){
  win = new BrowserWindow({width: 800, height: 600});

  // Load first page
  win.loadFile('index.html');

  win.on('closed', () => {
    // Delete all the alloctaed windows here
    win = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', ()=>{
  if(process.platform != 'darwin'){
    app.quit();
  }
});

app.on('activate', () => {
  if(win === null){
    createWindow();
  }
});