//const app = require('electron').app
//const BrowserWindow = require('electron').BrowserWindow
//igual que lo de abajo pero resumido
const{app,BrowserWindow} = require('electron')
const path = require('path')
const url = require('url') //ruta en formato url
let PantallaPrincipal; 

function MuestraPantallaPrincipal() {
	PantallaPrincipal = new BrowserWindow({
		width: 1024, height:768
	})
	PantallaPrincipal.on("closed",function(){
		PantallaPrincipal = null
	})
	PantallaPrincipal.loadURL('http://platzi.com')
	PantallaPrincipal.show()
}

app.on('ready',MuestraPantallaPrincipal)