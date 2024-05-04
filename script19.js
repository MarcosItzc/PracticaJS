var numAl1 = Math.floor(Math.random() * 100) + 1;
var numAl2 = Math.floor(Math.random() * 100) + 1;
var res = numAl1 + numAl2; // Se mueve el cálculo de 'res' dentro de la función comprobar
var elementoText = document.getElementById("text");
elementoText.innerHTML = numAl1 + " + " + numAl2;
function comprobar() {
 var res = numAl1 + numAl2; // Se recalcula 'res'
 var val = parseInt(document.getElementById("num").value);
 if (val === res) {
  var elemento = document.getElementById("text");
  elemento.style.color = "green";
 }else{
  var elemento = document.getElementById("text");
  elemento.style.color = "red";
 }
}