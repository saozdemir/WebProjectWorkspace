import {app, shell, BrowserWindow, ipcMain} from 'electron'
import {join} from 'path'
import {electronApp, optimizer, is} from '@electron-toolkit/utils'
import icon from '../../resources/icon.png?asset'

const {spawn} = require('child_process');
const http = require('http');
const path = require('path');

let backendProcess;

function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 900,
    height: 670,
    show: false,
    autoHideMenuBar: true,
    ...(process.platform === 'linux' ? {icon} : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false
    }
  })

  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return {action: 'deny'}
  })

  // HMR for renderer base on electron-vite cli.
  // Load the remote URL for development or the local html file for production.
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }
  mainWindow.webContents.openDevTools();
}

/** Backend process starter*/
function startBackend() {
  return new Promise((resolve, reject) => {
    // const __dirname = path.dirname(new URL(import.meta.url).pathname);
    // const jarPath = path.join(__dirname, '../../backend/backend-api-0.0.1-SNAPSHOT.jar');
    /** Java ve Jar dosyasının Path adresini alınca backend process olarak çalıştı.*/
    const jarPath = 'C:\\Users\\hvl\\home\\WebProjectWorkspace\\electronjs\\01-begin\\99-extra-examples\\02-frontend-app\\src\\backend\\backend-api-0.0.1-SNAPSHOT.jar';
    const javaPath = 'C:\\Program Files\\Java\\jdk-17\\bin\\java.exe';
// Spawn komutunu güncelledik
    backendProcess = spawn(javaPath, ['-jar', jarPath], {
      cwd: path.dirname(jarPath) // JAR'ın bulunduğu dizini çalışma dizini olarak ayarladık
    });

    // Backend hatalarını dinle
    backendProcess.stderr.on('data', (data) => {
      console.error(`Backend Error Details: ${data.toString()}`); // Hata detayını göster
      reject(new Error(`Backend hatası: ${data.toString()}`));
    });

// Proses kapatıldığında
    backendProcess.on('close', (code) => {
      if (code !== 0) {
        reject(new Error(`Backend exited with code ${code}`));
      }
    });

    // Hata dinleyicileri ekleyin
    backendProcess.on('error', (err) => {
      console.error('Backend başlatılamadı:', err);
      reject(err);
    });

    backendProcess.stderr.on('data', (data) => {
      console.error(`Backend Error: ${data}`);
      reject(new Error(`Backend hatası: ${data}`));
    });

    backendProcess.stdout.on('data', (data) => {
      console.log(`Backend ${data}`);
    });

    const checkBackend = () => {
      http.get('http://localhost:8080/backend/api/message', (res) => {
        let responseData = '';
        res.on('data', (chunk) => (responseData += chunk));
        res.on('end', () => {
          if (responseData.trim() === "This is a backend message") {
            resolve();
          } else {
            setTimeout(checkBackend, 1000);
          }
        });
      }).on('error', (err) => {
        setTimeout(checkBackend, 1000);
      });
    };
    checkBackend();
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(async () => {
  try {
    await startBackend();

    // Set app user model id for windows
    electronApp.setAppUserModelId('com.electron')

    // Default open or close DevTools by F12 in development
    // and ignore CommandOrControl + R in production.
    // see https://github.com/alex8088/electron-toolkit/tree/master/packages/utils
    app.on('browser-window-created', (_, window) => {
      optimizer.watchWindowShortcuts(window)
    })

    // IPC test
    ipcMain.on('ping', () => console.log('pong'))

    createWindow()

    app.on('activate', function () {
      // On macOS it's common to re-create a window in the app when the
      // dock icon is clicked and there are no other windows open.
      if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
  } catch (err) {
    console.error('Kritik Hata:', err.message);
    app.quit(); // Hata durumunda uygulamayı kapat
  }
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
