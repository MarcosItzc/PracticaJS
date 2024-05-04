window.onload = function() {
    // obtiene el numero de enlaces del HTML a traves de su id "informacion" para agregar
    var info = document.getElementById("informacion");
    
    // Obtiene el numero de enlaces de la pagina a traves de su tag "a"
    var enlaces = document.getElementsByTagName("a");
    // Crea un mensaje para ser visualizado en el HTML
    info.innerHTML = "Numero de enlaces = " + enlaces.length;

    // Direccion  del penultimo enlace 
    var mensaje = "El penultimo enlace apunta a: " + enlaces[enlaces.length - 2].href;

    // Agrega informacion al mensaje para ser visualizado en el HTML
    info.innerHTML = info.innerHTML + "<br/>" + mensaje;

    // Nuero de enlaces que apuntan a http://prueba
    var contador=0;
    for(var i=0; i<enlaces.length; i++)
        //comprobar los enlaces http://
        if(enlaces[i].href == "http://prueba" || enlaces [i].href == "http://prueba/")
        contador++;

    // Agrega 
    info.innerHTML = info.innerHTML + "<br/>" + contador + " enlaces apuntan a: http://prueba";

    //Numero de enlaces del tercer parrafo
    var parrafos = document.getElementsByTagName("p");
    enlaces = parrafos[2].getElementsByTagName("a"); //[2] para el tercer patrrafo

    // Agrega informacion al mensaje para ser visualizado en el HTML
    info.innerHTML = info.innerHTML + "<br/>" + "Numero de enlaces del tercer parrafo = " + enlaces.length;
}