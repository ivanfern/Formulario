//version 4 de javascript

function validar(formulario) {
	
    if(formulario.nombre.value.length < 3){
        alert("Escriba por lo menos 3 caracteres en el campo de Nombre")
        //focus() nos ayuda a focalizar donde esta el error del llenado
        //realiza un posicionamiento al elemento del formulario
        formulario.nombre.focus();
        return false;
    }

    var checkOk = "QWERTYUIOASDFGHJKLZXCVBNÑÁÉÍÓÚÜ" + "qwertyuiopsdfghjklzxcvbnmñáéíóúü";
    var checkString = formulario.nombre.value;

    alert(checkString);

    var allValid = true;
    //qwertyuiopasdfghjklñzxcvbnm

    for (var i =0; i < checkString.length; i++) {
        //charAt nos ayuda a separar una cadena en caracteres
        // por ejemplo ANA   char A N A
        var ch = checkString.charAt(i);
            for (var j = 0; j < checkOk.length; j++)
            if( ch == checkOk.charAt(j))
                break;
            if( j == checkOk.length ){
                allValid = false;
                break;
            }
        
    }

    //debo de saber el edo de allvalid
    if(!allValid){
        alert("Escriba solo letras en el campo de Nombre");
        formulario.nombre.focus();
        return(false);
    }


    if(formulario.edad.value.length < 2){
        alert("Escriba maximo 2 digitos, o la maxima edad es de 99")
        //focus() nos ayuda a focalizar donde esta el error del llenado
        //realiza un posicionamiento al elemento del formulario
        formulario.edad.focus();
        return false;
    }

    var checkOk = "1234567890";
    var checkString = formulario.edad.value;

    alert(checkString);

    var allValid = true;

    for (var i =0; i < checkString.length; i++) {
        //charAt nos ayuda a separar una cadena en caracteres
        // por ejemplo ANA   char A N A
        var ch = checkString.charAt(i);
            for (var j = 0; j < checkOk.length; j++)
            if( ch == checkOk.charAt(j))
                break;
            if( j == checkOk.length ){
                allValid = false;
                break;
            }
        
    }

    //debo de saber el edo de allvalid
    if(!allValid){
        alert("Escriba digitos en el campo de la Edad");
        formulario.edad.focus();
        return(false);
    }

    //validando el correo
    if(formulario.correo.value.length < 5){
        alert("Escriba el correo con el formato xxx.x@x.x")
        //focus() nos ayuda a focalizar donde esta el error del llenado
        //realiza un posicionamiento al elemento del formulario
        formulario.correo.focus();
        return false;
    }

    var txt = formulario.correo.value;
    //expresion regular
    var b = /^[^@\s]+@[^@\.\s]+(\.[^@\.\s]+)+$/
    //ejemplo@ejemplo
    //ejemplo@ejemplo.ejemplo
    //todo lo que esta adentro [] es la expresion

    //para la creacion del curp
    //para una llave compartida de SSSDDDPDF

    alert("Email " + (b.test(txt) ? "" : "no") + "valido");
    //si b.test(txt) "" es verdadero   : sino   "no" falso
    return b.test(txt);

    //var emailval = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
	
	
	
	//VALIDACION FECHA.
	
	// var fecha = new Date(formulario.fecha.value);
	// var yearok = new int(fecha.getFullYear());
	
	// if(Number.isInteger(yearok/4) == true ){
		// alert("el Año es Biciesto");
		// formulario.fecha.focus();
		// return true;
	// }
	// else{
		// alert("el Año no es Biciesto");
		// formulario.fecha.focus();
		// return false;
	// }
	
}
function ValidaFecha()
{
	var fecha = new Date(document.getElementById("fechaid").value);
	var yearok = fecha.getFullYear();
	if(document.getElementById("fechaid").value != "")
	{
		if(Number.isInteger(yearok/4) == true )
		{
			document.getElementById("texto").innerHTML = "El Año es Biciesto";
			// alert("el Año es Biciesto");
			
		}else
		{
			document.getElementById("texto").innerHTML = "El Año no es Biciesto";
			// alert("el Año no es Biciesto");
		}
	}else{
		document.getElementById("texto").innerHTML = "";
	}
	
	
}
//*********************			EJERCICIO CALCULO DE EDAD
function ValidaEdad()
{
	var Fecha = document.getElementById("fechaNaciId").value;
	var FechaNaci = new Date(Fecha);
	FechaNaci.setDate(FechaNaci.getDate() + 1);
	var FechaActual = new Date();
	if(FechaNaci < FechaActual)
	{
		if(Fecha != "")
		{
			//var Edad = edad(Fecha);
			var Edad = Years(Fecha) + meses(Fecha) + diasTranscurridos(Fecha);
			
			document.getElementById("lbledad").innerHTML = "Su edad es: " + Edad;
		}else
		{
			document.getElementById("lbledad").innerHTML = "";
		}
	}else
	{
		document.getElementById("lbledad").innerHTML = "Ingrese una fecha valida, menor a la fecha actual";
	}
}
//****************			CALCUALA AÑOS
function Years(FechaNaci)
{
	var FechNaci = new Date(FechaNaci);
	FechNaci.setDate(FechNaci.getDate() + 1);
	var FechaActual = new Date();
	var yea = FechaActual.getFullYear() - FechNaci.getFullYear();
	if (FechaActual.getMonth() < FechNaci.getMonth())
	{
		yea = yea -1;
	}
	if(FechaActual.getMonth() == FechNaci.getMonth())
	{
		if(FechaActual.getDate() < FechNaci.getDate())
		{
			yea = yea -1;
		}
	}
	return yea + " Años ";
}
//**************			CALCULA MESES
function meses(FechaNaci)
{
	var FechNaci = new Date(FechaNaci);
	FechNaci.setDate(FechNaci.getDate() + 1);
	var FechaActual = new Date();
	var mesesCumplidos = 0;
	if(FechaActual.getMonth() < FechNaci.getMonth())
	{
		var MesesActuales = 11 - FechaActual.getMonth();
		var MesesYearAnterior = 11 - FechNaci.getMonth();
		mesesCumplidos = MesesYearAnterior + MesesActuales;
		return mesesCumplidos + " Meses ";
	}
	if(FechaActual.getMonth() == FechNaci.getMonth())
	{
		if(FechaActual.getDate() < FechNaci.getDate())
		{
			return "11 Meses ";
		}
		if(FechaActual.getDate() >= FechNaci.getDate())
		{
			return "0 Meses ";
		}
	}
	if(FechaActual.getMonth() > FechNaci.getMonth())
	{
		if(FechaActual.getMonth()-1 == FechNaci.getMonth())
		{
			if(FechaActual.getDate() < FechNaci.getDate())
			{
				return "0 Meses ";
			}else
			{
				return "1 Meses ";
			}
		}else
		{
			if(FechaActual.getDate() < FechNaci.getDate())
			{
				mesesCumplidos = FechaActual.getMonth() - FechNaci.getMonth();
				mesesCumplidos = mesesCumplidos - 1;
				return mesesCumplidos + " Meses ";
			}else
			{
				mesesCumplidos = FechaActual.getMonth() - FechNaci.getMonth();
				
				return mesesCumplidos + " Meses ";
			}
		}
	}
}
//**************		CALCULA DIAS
function diasTranscurridos(FechaNaci)
{
	var FechNaci = new Date(FechaNaci);
	FechNaci.setDate(FechNaci.getDate() + 1);
	var FechaActual = new Date();
	var DiasMesActual = new Date(FechaActual.getFullYear(), FechaActual.getMonth(), 0).getDate();
	var DiasMesAnterior = new Date(FechaActual.getFullYear(), FechaActual.getMonth() - 1, 0).getDate();
	if(FechaActual.getDate() < FechNaci.getDate())
	{
		var DiasAnteriores = DiasMesAnterior - FechNaci.getDate();
		var Total = FechaActual.getDate() + DiasAnteriores;
		return Total + " Dias ";
	}
	if(FechaActual.getDate() == FechNaci.getDate())
	{
		return "0 Dias ";
	}
	if(FechaActual.getDate() > FechNaci.getDate())
	{
		var diasOk = FechaActual.getDate() - FechNaci.getDate();
		return diasOk + " Dias ";
	}
}
//***********************		FIN CALCULO DE AÑOS
//***********************		PRACTICA PORCENTAJE DE PERSONAS

function CalculaPorcentaje(){
	var countHombres = document.getElementById("txtHombres").value;
	var countMujeres = document.getElementById("txtMujeres").value;
	if(countHombres != "" && countMujeres != "")
	{
		if(countHombres != "0" || countMujeres != "0")
		{
			var Total = parseInt(countHombres,10) + parseInt(countMujeres,10);
			var PorHombres = ((countHombres / Total) * 100).toFixed(2);
			var PorMujeres = ((countMujeres / Total) * 100).toFixed(2);
			document.getElementById("lblHombres").innerHTML = PorHombres + " %";
			document.getElementById("lblMujeres").innerHTML = PorMujeres + " %";
		}else
		{
			document.getElementById("lblHombres").innerHTML = "0 %";
			document.getElementById("lblMujeres").innerHTML = "0 %";
		}
	}else
	{
		document.getElementById("lblHombres").innerHTML = "";
		document.getElementById("lblMujeres").innerHTML = "";
	}
}

//***********************		FIN PORCENTAJES

