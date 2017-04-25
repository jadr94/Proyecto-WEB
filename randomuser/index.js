const rq  = require('electron-require');
const main= rq.remote('./main.js');
const $   = require ("jquery");

function datosRandom(){
	$.ajax({
 	 url: 'https://randomuser.me/api/',
	  dataType: 'json',
	  success: function(data) {
	    $("#txtNombre").html(data.result[0].name.first+" "+data.result[0].name.first)
	    $("#imgFoto").attr("src",data.result[0].picture.large)
	  },
	  error(a,b,c){
	  	alert("Sin internet o sin servidor")
	  }
	});
      
}
$("#btninfo").on("click",datosRandom);
/*
jquery().on
jquery = $
JSON =JavaScript Object Notation
	conjunto:[
		llave:valor,
		llave2:valor,
		llave3:{
			llave4:valor,
			llave5:valor
		}
	]
*/

