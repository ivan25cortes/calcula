var operandoa;
	var operandob;
	var operacion:


function init(){
	
	var Resultado=document.getElementById("Resultado");
	var reset=document.getElementById("reset");
	var suma=document.getElementById("suma");
	var resta=document.getElementById("resta");
	var multiplicacion=document.getElementById("multiplicacion");
	var division=document.getElementById("division");
	var igual=document.getElementById("igual");
	var uno=document.getElementById("uno");
	var dos=document.getElementById("dos");
	var tres=document.getElementById("tres");
	var cuatro=document.getElementById("cuatro");
	var cinco=document.getElementById("cinco");
	var seis=document.getElementById("seis");
	var siete=document.getElementById("siete");
	var ocho=document.getElementById("ocho");
	var nueve=document.getElementById("nueve");
	var cero=document.getElementById("cero");


	uno.onclick = function(e){
		Resultado.textContent = Resultado.textContent + "1"
	}

	dos.onclick = function(e){
		Resultado.textContent = Resultado.textContent + "2"
	}

	tres.onclick = function(e){
		Resultado.textContent = Resultado.textContent + "3"
	}

	cuatro.onclick = function(e){
		Resultado.textContent = Resultado.textContent + "4"
	}

	cinco.onclick = function(e){
		Resultado.textContent = Resultado.textContent + "5"
	}

	seis.onclick = function(e){
		Resultado.textContent = Resultado.textContent + "6"
	}

	siete.onclick = function(e){
		Resultado.textContent = Resultado.textContent + "7"
	}

	ocho.onclick = function(e){
		Resultado.textContent = Resultado.textContent + "8"
	}

	nueve.onclick = function(e){
		Resultado.textContent = Resultado.textContent + "9"
	}

	cero.onclick = function(e){
		Resultado.textContent = Resultado.textContent + "0"
	}


	reset.onclick = function(e){
		resetear();
	}
	suma.onclick = function(e){
		operandoa = Resultado.textContent;
		operacion = "+";
		limpiar();
	}
	resta.onclick = function(e){
		operandoa = Resultado.textContent;
		operacion = "-";
		limpiar();
	}
	multiplicacion.onclick = function(e){
		operandoa = Resultado.textContent;
		operacion = "*";
		limpiar();
	}
	division.onclick = function(e){
		operandoa = Resultado.textContent;
		operacion = "/";
		limpiar();
	}
	igual.onclick = function(e){
		operandob = Resultado.textContent;
		resolver();
	}
}
function limpiar(){
	Resultado.textContent ="";
}
function resetear(){
	Resultado.textContent="";
	operandoa = 0;
	operandob= 0;
	operacion= "";
}
function setResult(value) {
    document.getElementById('result').innerHTML = value;
}
function getResult() {
    return(document.getElementById('result').innerHTML);
}
function add(key) { 
    var result = getResult();
    if (result!='0' || isNaN(key)) setResult(result + key);
    else setResult(key);
}
function calc() {
    var result = eval(getResult()); 
    setResult(result);
}
function del() { 
    setResult(0);
}
