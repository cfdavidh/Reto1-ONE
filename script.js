let texto1 = document.querySelector(".ingresarTexto1");
let texto2 = document.querySelector(".ingresarTexto2");


function botonEncriptar() {
	let encriptado = encriptar(texto1.value);
	texto2.value = encriptado;
	texto1.value = "";
	texto2.style.backgroundImage = "none"
}


function encriptar(textoEncriptado) {
	let letrasPalabras = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
	textoEncriptado = textoEncriptado.toLowerCase();

	for (let i = 0; i < letrasPalabras.length; i++) {
		if (textoEncriptado.includes(letrasPalabras[i][0])) {
			textoEncriptado = textoEncriptado.replaceAll(letrasPalabras[i][0], letrasPalabras[i][1])
		}
	}
	return textoEncriptado
}

var button = document.querySelector(".botonZona1_1")
button.onclick = botonEncriptar;





function botonDesencriptar() {
	let encriptado = desencriptar(texto1.value);
	texto2.value = encriptado;
	texto1.value = "";
}

function desencriptar(textoDesencriptado) {
	let letrasPalabras = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
	textoDesencriptado = textoDesencriptado.toLowerCase();

	for (let i = 0; i < letrasPalabras.length; i++) {
		if (textoDesencriptado.includes(letrasPalabras[i][1])) {
			textoDesencriptado = textoDesencriptado.replaceAll(letrasPalabras[i][1], letrasPalabras[i][0])
		}
	}
	return textoDesencriptado
}

var button2 = document.querySelector(".botonZona1_2")
button2.onclick = botonDesencriptar;


var codigoCopiar = document.querySelector(".ingresarTexto2");
var button3 = document.querySelector(".botonZona2");
var mensajeCopia = document.querySelector("#mensaje");

button3.addEventListener("click",function(){
	codigoCopiar.focus();
	document.execCommand("selectAll");
	document.execCommand("copy");
	mensaje.innerHTML = "Copiado al portapapeles"

	setTimeout(()=> mensaje.innerHTML = "", 2000)
})


