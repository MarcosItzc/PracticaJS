function invertirPalabra() {

    var palabra = document.getElementById("inputWord").value;
    

    var palabraInvertida = "";
    for (var i = palabra.length - 1; i >= 0; i--) {
        palabraInvertida += palabra[i];
    }

    document.getElementById("resultado").innerHTML = "Palabra invertida: " + palabraInvertida;
}