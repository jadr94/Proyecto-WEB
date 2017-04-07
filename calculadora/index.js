//Agrega al codigo (un enlace) al main.js
const rq= require('electron-require');
const main= rq.remote('./main.js');
var botonesNumero= ["btn00","btn01","btn02","btn03","btn04","btn05","btn06","btn07","btn08","btn09"];

var botonesOperador= ["btnSumar","btnRestar","btnMultiplicar","btnDividir"];
var operador="";
function numeros(){
var num=String(this.value)
 if (operador==""){ //validando el operador1
 	var va= document.getElementById("operador1").value;
 	if(va=="0"){
 		document.getElementById("operador1").value="";
 	}
 	document.getElementById("operador1").value+=num;
 } else{
 	var va= document.getElementById("operador2").value;
 	if(va=="0"){
 		document.getElementById("operador2").value="";
 	}
 	document.getElementById("operador2").value+=num;
 }
}
function operadores(){
 operador= String(this.value);//+,-,*,/
}
function igual(){
var valor1=document.getElementById("operador1").value;
var valor2=document.getElementById("operador2").value;
document.getElementById("resultado").value=eval(valor1+operador+valor2);
}
function borrar(){
	document.getElementById("operador1").value= "0";
	document.getElementById("operador2").value= "0";
	document.getElementById("resultado").value= "0";
	operador="";
}
//Asignacion de eventos a los botones de numeros
for (var i=0;i<botonesOperador.length;i++){
	document.getElementById(botonesOperador [i]).addEventListener('click',numeros);//checar
}
//Asignacion de eventos para los botones de operador
for (var i=0;i<botonesNumero.length;i++){
	document.getElementById(botonesNumero [i]).addEventListener('click',Operadores);//checar
}
document.getElementById("btnIgual").addEventListener('click',igual)
document.getElementById("btnBorrar").addEventListener('click',borrar)
