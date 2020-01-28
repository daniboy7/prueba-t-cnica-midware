var porcentaje = function(){
	var numero1 = parseInt(document.getElementById("numero1").value);
	var numero2 = parseInt(document.getElementById("numero2").value);
			
	var resultado = ( numero1 * 100 ) / numero2;
	return resultado;
}
		
var actualizar = function(){
	var element = document.getElementById("barra");
	var width = porcentaje() ;
	element.style.width = width + '%';
	element.innerHTML = width * 1  + '%'; 
}