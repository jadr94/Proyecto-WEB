const rq  = require('electron-require');
const main= rq.remote('./main.js');
const $   = require ("jquery");

var buscarPersonaje = function(){

}
//Posicion el cursor en el cuadro de texto
$("#txtPersonajes").focus();
//Evento del botón btnBuscar-click
$("#btnBuscar").on("click",buscarPersonaje);