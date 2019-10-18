//var slider = document.getElementById('slider');
var slider = document.getElementsByClassName('slider');

var textContent = document.getElementsByClassName('slideTextContent');
var rightArrow = document.getElementById('rightArrow');
var leftArrow = document.getElementById('leftArrow');
//slider[0].style.backgroundImage = "url('img/img3.jpg')";
//console.log();
console.log(textContent);

function mudarTexto(elemento, numero){
	for (var i = 0; i < elemento.length; i++) {
		if (i == numero) {
			elemento[i].classList.remove("textContentHide");
		}else{
			elemento[i].classList.add("textContentHide");
		}
	}
}


numero = 0;
function slide (numero, elemento, texto, right, left) {
	
	if (texto.length <= numero) {
		numero = 0;
		console.log("numero menor que zero")
	}

	right.addEventListener('click', function(){
		numero++;

		if (numero < 0) {
			
			numero = texto.length -1;
			console.log("numero Anterior" + numero);
		}

		if (texto.length <= numero) {
			numero = 0;
		}

		elemento[0].style.backgroundImage = "url('img/img"+ numero +".jpg')";
		mudarTexto(texto, numero);
	});


	left.addEventListener('click', function(){
		numero--;
	
		if (numero < 0) {
			numero = texto.length -1;
		}

		if (texto.length <= numero) {
			numero = 0;
		}

		elemento[0].style.backgroundImage = "url('img/img"+ numero +".jpg')"
		mudarTexto(texto, numero);
	});
	
	elemento[0].style.backgroundImage = "url('img/img"+numero+".jpg')"
	mudarTexto(texto, numero);
	/*for (var i = 0; i < texto.length; i++) {
		if (i == numero) {
			texto[i].classList.remove("textContentHide");
		}else{
			texto[i].classList.add("textContentHide");
		}
	}*/


	numero++;
    setTimeout(slide,3000, numero++, elemento, textContent, right, left);
}



//slide(numero, slider,textContent, rightArrow, leftArrow);
