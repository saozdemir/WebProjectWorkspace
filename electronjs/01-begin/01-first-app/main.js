const electron = require('electron');
const path = require('path');
const url = require('url');

const {app, BrowserWindow, Menu} = electron;
let mainWindow;
app.on('ready', () => {

    /** İşletim sistemi öğrenme*/
    console.log(process.platform);
    /** Bir pencere oluşturulur*/
    mainWindow = new BrowserWindow({});
    mainWindow.loadURL(
        url.format({
            pathname: path.join(__dirname, 'main.html'),
            protocol: 'file:',
            slashes: true
        }));
    mainWindow.setSize(500,600);
    /** Menü oluşturma*/
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    Menu.setApplicationMenu(mainMenu);
});

/** Menü içeriği ekleme*/
const mainMenuTemplate = [
    {
        label: "Dosya",
        submenu: [
            {
                label: "Ekle"
            },
            {
                label: "Sil",
                accelerator: process.platform
            },
            {
                label: "Çıkış",
                accelerator: process.platform === "win32" ? "Ctrl+Q" : "Command+Q", /** Kısayol ekleme*/
                role: "quit" /** Rol ile otomatik işlemler yapılabilir.*/
            }
        ]
    },

];

/** Uygulama adını yazdırma*/
mainMenuTemplate.unshift(
    {
        label: app.getName().toUpperCase(),
        role: "TODO"
    }
)

/** Production durumunda olmadığı durum için Dev Tools menüsünü aktif et.*/
if(process.env.NODE_ENV !== 'production') {
    mainMenuTemplate.push(
        {
            label: "Dev Tools",
            submenu: [
                {
                    label: "Geliştirici Penceresi",
                    click(item, focusedWindow) {
                        focusedWindow.toggleDevTools(); /** Yeni bir ekran açılacaksa yeni pencerede mi yoksa mevcut pencerede mi açılacak*/
                    }
                },
                {
                    label: "Yenile",
                    role: "reload"
                }
            ]
        }
    )
}

app.on('window-all-closed', () => {
    if (process.platform === 'win32') {
        console.log("Uygulama kapatıldı.");
    }
})