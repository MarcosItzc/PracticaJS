
// Arreglo para saber cuales divs ya estan ocupados
let arreglo = ["", "", ""];

// Función que evita que se abra como enlace al soltar un elemento
function allowDrop(ev) {
    ev.preventDefault();
}

// Qué sucede cuando se arrastra un elemento
function drag(ev) {
    // Método que establece el tipo de datos y el valor del dato arrastrado
    ev.dataTransfer.setData("text", ev.target.id);
}

// Función que se ejecuta cuando se suelta un elemento
   function drop(ev){
    if (arreglo[parseInt(ev.target.id)] == "") {
        var data = ev.dataTransfer.getData("text");
        arreglo[parseInt(ev.target.id)] = data;
        ev.target.appendChild(document.getElementById(data));

   // }
   //}
    
    // Controlo que ya esten arrastrados todos los elementos
    if (arreglo[0] !== "" && arreglo[1] !== "" && arreglo[2] !== "") {
        // Controlo si hay coincidencia
        if (arreglo[0] == "gato" && arreglo[1] == "perro" && arreglo[2] == "loro") {
            document.querySelector("h1").innerHTML = "¡MUY BIEN!";
        } else {
            document.querySelector("h1").innerHTML = "¡INTENTAR DE NUEVO!";
        }
    }
}
   }

   function intentarDeNuevo() {
    // Reiniciar el arreglo
    arreglo = ["", "", ""];
    // Restablecer el mensaje
    document.querySelector("h1").innerHTML = "Arrastra donde corresponde";

    // Restaurar la capacidad de arrastrar las imágenes y volverlas a su posición inicial
    var imagenes = document.querySelectorAll("img");
    imagenes.forEach(function(img) {
        img.setAttribute("draggable", "true");
        img.parentNode.removeChild(img); // Eliminar la imagen de su posición actual
    });

    // Volver a agregar las imágenes a su posición inicial
    var container = document.querySelector(".container");
    imagenes.forEach(function(img) {
        container.appendChild(img); // Agregar la imagen de nuevo al contenedor
    });

    // Limpiar las áreas de destino
    var areasDestino = document.querySelectorAll(".box");
    areasDestino.forEach(function(area) {
        area.innerHTML = "";
    });
   }
