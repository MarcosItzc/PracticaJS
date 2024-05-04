function generarRFC() {
    var nombre = document.getElementById('nombre').value.toUpperCase();
    var apellidoPaterno = document.getElementById('apellidoPaterno').value.toUpperCase();
    var apellidoMaterno = document.getElementById('apellidoMaterno').value.toUpperCase();
    var fechaNacimiento = document.getElementById('fechaNacimiento').value;

    var rfc = apellidoPaterno.substring(0, 2) +
              apellidoMaterno.substring(0, 1) +
              nombre.substring(0, 1) +
              fechaNacimiento.substring(2, 4) +
              fechaNacimiento.substring(5, 7) +
              fechaNacimiento.substring(8, 10);

    document.getElementById('resultado').innerText = 'RFC generado: ' + rfc;
}
