var slider = document.getElementsByClassName('slider');

var textContent = document.getElementsByClassName('slideTextContent');
var rightArrow = document.getElementById('rightArrow');
var leftArrow = document.getElementById('leftArrow');

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
	numero++;
    setTimeout(slide,3000, numero++, elemento, textContent, right, left);
}



slide(numero, slider,textContent, rightArrow, leftArrow);


var diaDeSemana = "domingo";
if (diaDeSemana === "domingo") {
	console.log("Hoje é dia de Futebol!!!");
}

function eMaior(numeroUm,numeroDois){
	if (numeroUm>numeroDois) {
		return numeroUm;
	}else{
		return numeroDois;
	}
}

function sinal(numero){
	if (numero > 0) {
		return 1
	}
	
	if (numero === 0) {
		return 0
	}

	if (numero < 0) {
		return -1
	}
}

function eNumeroDaSorte(numero) {
	return numero > 0 && numero%2 == 0 || numero%3 == 0 && numero != 15;
}

function possoIrAoBanco(diaDaSemana,horaAtual){
	var domingo = "domingo";
	var sabado = "sábado";
	var sabadoDois = "Sábado"
	return diaDaSemana != domingo && diaDaSemana != sabado && horaAtual > 9 && horaAtual < 15 && diaDaSemana != sabadoDois;
}

function filosofoHipster(profissao,nacionalidade,quilometragem){
	var filosofoProfissao = "Músico";
	var filosofoPais = "Brasil";
	return profissao == filosofoProfissao && nacionalidade == filosofoPais && quilometragem > 2;
}

function temAMesmaMae(filhoUm, filhoDois){
	var maeFilhoUm = maeDe(filhoUm);
	var maeFilhoDois = maeDe(filhoDois);
	return maeFilhoUm == maeFilhoDois;
}

function temOMesmoPai(filhoUm, filhoDois){
	var paiFilhoUm = paiDe(filhoUm);
	var paiFilhoDois = paiDe(filhoDois);
	return paiFilhoUm == paiFilhoDois;
}

function saoMeioIrmaos(filhoUm,filhoDois){
	return (temAMesmaMae(filhoUm, filhoDois) && !(temOMesmoPai(filhoUm, filhoDois))) || (temOMesmoPai(filhoUm, filhoDois) && !(temAMesmaMae(filhoUm, filhoDois))) ;
}

function xor(valorUm, valorDois){
	return (valorUm == true && !(valorDois)) || (valorDois == true && !(valorUm))
}

function podeSeAposentar(idade,sexo,anosContribuicao){
	var masculino = "M";
	var feminino = "F";
	return(idade >= 60 && sexo == feminino && anosContribuicao >= 30) || (idade >= 65 && masculino == sexo && anosContribuicao >= 30);
}

function podeSubir(alturaPessoa,vemComCompania,temProblemaCardiaco){
	return (alturaPessoa >= 1.5 && !(temProblemaCardiaco)) !! (alturaPessoa >= 1.2 && vemComCompania &&!(temProblemaCardiaco))
}

function medalhaSegundoOPosto (posto){
	if (posto > 3) {
		return "Continue participando";
	}
	if (posto == 1) {
		return "ouro";
	}
	if (posto == 2) {
		return "prata";
	}
	if (posto == 3) {
		return "bronze"
	}
}

for (var i = 0; i < 5; i++) {
	console.log(5);
}

function medalhaDeAcordoComPosto(numero){
	var medalhas = ["ouro","prata","bronze"];
	var solicitado = medalhas[numero-1];
	if (numero > medalhas.length || numero <= 0) {
		return "nada";
	}else{
		return solicitado;
	}
}

function saldoDeMesesComLucro(elemento){
	var comLucro = [];
	for (var i = 0; i < elemento.length; i++) {
		if (elemento[i]>0) {
			comLucro.push(elemento[i]);
		}
	}
	return comLucro;
}

function naipeDeTruco(naipe){
	var baralho = [];
	for (var i = 1; i < 13; i++) {
		if (i != 8 && i != 9) {
			baralho.push(i + " de " + naipe);
		}
	}
	return baralho
}

function produto(numero){
	var produto = 0;
	if (numero.length == 0) {
		return 1;
	}
	for (var i = 0; i < numero.length; i++) {
		if (i == 0) {
			produto = numero[i]*1;
		}else{
			produto = produto * numero[i];
		}
	}
	return produto;
}

function maisMenos(numero){
	var positivos = 0;
	var zeros = 0;
	var negativos = 0;
	var porcentagem = 1/(numero.length);
	var total = [0,0,0];
	for (var i = 0; i < numero.length; i++) {
		if (numero[i] == 0) {
			zeros = zeros + porcentagem;
			total = [positivos, zeros, negativos];
		}else if (numero[i] < 0){
			negativos = negativos + porcentagem;
			total = [positivos, zeros, negativos];
		}else if(numero[i]>0){
			positivos = positivos+ porcentagem;
			total = [positivos, zeros, negativos];
		}else{
			return[0,0,0];
		}
	}
	//total.push([positivos, zeros, negativos]);
	return total;
}

function escada(numero){
	var total = [];
	for (var i = 0; i < numero; i++) {
		total.push(" ".repeat(numero-i-1) + "#".repeat(i+1)); 
	}
	return total;
}

function acontece(chegadas,numeroDeAlunos){
	var naoAcontece = 0;

	for (var i = 0; i < chegadas.length; i++) {
		if (chegadas[i]<=0) {
			naoAcontece++;
		}
	}
	return naoAcontece >= numeroDeAlunos;
}

function aberturas(diaDaSemana, numeroDeAlunos){
	var retorno = [];
	var test = [];
	if (Array.isArray(diaDaSemana[0])) {
		for (var i = 0; i < diaDaSemana.length; i++) {
			retorno.push(acontece(diaDaSemana[i],numeroDeAlunos));
		}
	}else{
		retorno.push(acontece(diaDaSemana,numeroDeAlunos));
	}
	return retorno;
}

function alturaArvoreUtopica(numero){
	var tamanho = 1;
	if (numero == 0) {
		tamanho = 1;
	}else{
		for (var i = 1; i < numero+1; i++) {
			console.log("i = " + i);
			if (i == 0) {
				tamanho = 1;
			}else{
				if (i%2 == 0) {
					tamanho++;
					console.log("tamanho = " + tamanho)
				}else{
					tamanho = tamanho * 2;
				}
			}
			
		}
	}
	return tamanho;
}
