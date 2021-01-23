/*PROGRAMA JAVASCRIPT DE DESCARGA DE ARCHIVOS DE LA PROGRAMACION DE LA ASIGNATURA*/

function descarga(){
	var combo = document.getElementById("select");
	var cod = document.getElementById("select").value;
	var selected = combo.options[combo.selectedIndex].text;
		alert(selected);
		alert(cod);
			
	if (checkTema.checked ==true) {
		alert("correcto");
	}
	else{
		alert("noCorrecto");
	}

	var tema = document.getElementById("tem1");
	var href = tema.getAttribute("href");
	window.location = href;
}