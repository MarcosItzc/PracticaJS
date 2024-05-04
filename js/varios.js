function muestra(sValor, oTbl, oElemento) {
	var nTabla = 0, i = 0;
	var oLinea, oCeldaOpe, oCeldaRes, oCeldaCal;
	var oCtrl, oCtrl2;
	
	if (isNaN(sValor))
		alert("Debe elegir la tabla de multiplicar");
	else {
		nTabla = parseInt(sValor, 10);
		if (oElemento != null) {
			oElemento.style.visibility = "visible";

			if (oTbl != null) {
				if (oTbl.rows.length > 1) {
					for (i = 1; i <= 10; i++)
						oTbl.deleteRow(-1);
				}

				for (i = 1; i <= 10; i++) {
					oLinea = oTbl.insertRow(-1);
					oCeldaOpe = oLinea.insertCell(0);
					oCeldaRes = oLinea.insertCell(1);
					oCeldaCal = oLinea.insertCell(2);
					oCeldaOpe.innerHTML = nTabla + " * " + i;

					oCtrl = document.createElement("input");
					oCtrl.type = "text";
					oCtrl.id = "txtResultado" + i;
					oCeldaRes.appendChild(oCtrl);

					oCeldaCal.innerHTML = " ok ";

					oCtrl2 = document.createElement("span");
					oCtrl2.id = "Ok" + i;
					oCeldaCal.appendChild(oCtrl2);
				}
			}
		}
	}
}

function califica(sValor, oTbl) {
	var nTabla = 0, i = 0, nCapturado = 0, nCalif = 0;
	var sValorCapturado = "", sErr = "";

	if (isNaN(sValor)) 
		sErr = "Debe elegir la tabla de multiplicar";
	else {
		nTabla = parseInt(sValor, 10);
		if (oTbl.rows.length > 1) {
			for (i = 1; i <= 10; i++) {
				sValorCapturado = document.getElementById("txtResultado" + i).value;
				if (isNaN(sValorCapturado)) 
					sErr = sErr + "Error de captura en el resultado" + i + "\n";
				else {
					nCapturado = parseInt(sValorCapturado, 10);
					if (nCapturado == nTabla * i) {
						nCalif++;
						document.getElementById("txtResultado" + i).style.border = "4px solid #4bf510";
						document.getElementById("txtResultado" + i).style.backgroundColor = "#4bf510";
					}
				}
			}
		}
	}

	if (sErr == "") 
		alert("Calificacion = " + nCalif);
	else 
		alert(sErr);
}