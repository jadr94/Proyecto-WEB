var operador = "";

function igual{
  valor1= document.calculadora.operador1.value;
  valor2= document.calculadora.operador2.value;
  if(operador=="+"){
    document.calculadora.resultado.value=parseint(valor1)+valor2;
  }
  document.calculadora.resultado.value=eval(valor1+operador+valor2)
}
function operadores(ope){
  operador=ope;
}

function numeros(num){
  if(operador==""){
    var valorInicial = document.calculadora.operador1.value;
     if (valorInicial == "0") {
      document.calculadora.operador1.value="";
     }
     document.calculadora.operador1.value=
    document.calculadora.operador1 + num;
  }else{
    var valorInicial = document.calculadora.operador2.value;
     if (valorInicial == "0") {
      document.calculadora.operador2.value="";
     }
     document.calculadora.operador2.value=
    document.calculadora.operador2 + num;

}
function operadores(num){
  alert(num);
}
