function validarn(e)
{
	var teclado = (document.all)? e.keyCode : e.which ;
	if(teclado == 8)return true;
	var patron = /[0-9\d.]+/;
	var patron2 = /\.{1}/;
	
	var tec = String.fromCharCode(teclado);
	if(patron2.test(tec) == true)
	{
		//console.log(patron2.test(document.formulario.cantidad.value));
		if(document.formulario.cantidad.value.indexOf(".",0) > -1)
		{
			return false;
		}
		
	}
	
	
	return patron.test(tec);
}
function Decimales()
{
	document.formulario.cantidad.value = parseFloat(document.formulario.cantidad.value).toFixed(2);
}
function interes()
{
	var valor = document.formulario.cantidad.value;
	var mesesent = parseFloat(document.formulario.meses.value);
	var result = parseInt(valor);
	var interes = (result * 0.02) * mesesent;
	var total = result + interes;
	document.formulario.sueldoti.value = "$" + total;
}
function borrart()
{
	document.formulario.sueldoti.value = "";
	document.formulario.cantidad.value = "";
	document.formulario.meses.value = "";
}