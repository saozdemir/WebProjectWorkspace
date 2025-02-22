import { app, shell, BrowserWindow, ipcMain } from 'electron'
import { join } from 'path'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import icon from '../../resources/icon.png?asset'
const { exec } = require("child_process");
const http = require("http");

function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 900,
    height: 670,
    show: false,
    autoHideMenuBar: true,
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false,
    }
  })
  mainWindow.webContents.toggleDevTools();
  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  })


  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  // HMR for renderer base on electron-vite cli.
  // Load the remote URL for development or the local html file for production.
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }

}



// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
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
})

// const springBootProcess = exec("java -jar todo-rest-api-0.0.1-SNAPSHOT.jar", (error, stdout, stderr) => {
//   if (error) {
//     console.error(`Hata: ${error.message}`);
//     return;
//   }
//   console.log(`Spring Boot Çıktısı: ${stdout}`);
// });

// function checkSpringBootReady(url, callback) {
//   http.get(url, (res) => {
//     if (res.statusCode === 200) {
//       console.log("Spring Boot API hazır!");
//       callback();
//     } else {
//       console.log("API henüz hazır değil, tekrar deniyor...");
//       setTimeout(() => checkSpringBootReady(url, callback), 3000);
//     }
//   }).on("error", () => {
//     console.log("Bağlantı başarısız, tekrar deniyor...");
//     setTimeout(() => checkSpringBootReady(url, callback), 3000);
//   });
// }
//
// // Spring Boot'u çalıştır
// const springBootProcess = exec("java -jar E:\\WebProjectWorkspace\\electronjs\\01-begin\\99-extra-examples\\01-electron-react-redux\\src\\main\\todo-rest-api-0.0.1-SNAPSHOT.jar", (error, stdout, stderr) => {
//   if (error) {
//     console.error(`Spring Boot Başlatılamadı: ${error.message}`);
//     return;
//   }
//   console.log(`Spring Boot Logları: ${stdout}`);
// });
//
// // API'nin hazır olup olmadığını kontrol et
// checkSpringBootReady("http://localhost:8080/rest/api/todo-app/list", () => {
//   console.log("Spring Boot API çalışıyor, Electron UI açılıyor...");
//   // Burada Electron'un geri kalan kısmını başlatabilirsiniz.
// });
//
//
// app.on("before-quit", () => {
//   springBootProcess.kill();
// })

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
