// const app = require('electron').app
// const BrowserWindow = require('electron').BrowserWindow --Obligatoria 
const{app,BrowserWindow} =require('electron') //esta linea es equivalente a los dos de arriba
const electron = require('electron')
//Ruta donde se encuentra nuestro proyecto
const path = require('path')
//Ruta pero en formato URL
const url  = require('url')
//Constantes para impresion en PDF
const fs = require('fs')//sistema de archivos
const os = require('os')//sistema operativo
//llamada a procedimiento interno
const ipc = electron.ipcMain
//interfaz de comandos o terminal
const shell =electron.shell
//Pantalla Principal
let PantallaPrincipal;

//evento para imprimir en PDF universal, sirve en cualquier aplicacion

ipc.on('print-to-pdf',function(event){
	const pdfPath=path.join(os.tmpdir(),'print.pdf')
	const win=BrowserWindow.fromWebContents(event.sender)
	win.webContents.printToPDF({},function(error,data){
		if(error) throw error
			fs.writeFile(pdfPath,data,function(error){
				if (error) {
					throw error
				}
				shell.openExternal('file://'+pdfPath)
			})
	})
})
function muestraPantallaPrincipal(){
	//es un objeto de browserWindow
	PantallaPrincipal = new BrowserWindow({
		width:1024,
		height:768
	})
	PantallaPrincipal.on('closed',function(){
		PantallaPrincipal = null
	})
	PantallaPrincipal.loadURL(url.format({
		pathname: path.join(__dirname,'index.html'),
		protocol: 'file', //le estamos diciendo que es un archivo de nosotros y respete las diagonales (?)
		slashes: true
	}))
	PantallaPrincipal.show()

}

//La aplicación se ejecuta
//el archivo main.js se carga en memoria. 
app.on('ready',muestraPantallaPrincipal) 