function agregaLinea(){
    var oTb1 = document.getElementById("tb1Uno");
    var oLin = oTb1.insertRow(-1);
    var ocelda1 = oLin.insertCell(0);
    var ocelda2 = oLin.insertCell(1);
    var ocelda3 = oLin.insertCell(2);

    ocelda1.innerHTML = "Celda";
    ocelda2.innerHTML = 'texto y campo ' + '<input type="text" name = "campo"/>';
    ocelda3.innerHTML = "agregado"
}

function eliminaLinea(){
    var oTb1 = document.getElementById("tb1Uno");
    oTb1.deleteRow(-1);
}