//boolean
var vOuF = false;
console.log(typeof(vOuF));
//number
var numeroQualquer = 1;
console.log(typeof(numeroQualquer));
//string
var nome = "Fada Sensata";
console.log(typeof(nome));
//function
var funcao = function() {

}
console.log(typeof(funcao));
//como declarar
var variavel;
console.log(variavel);

let variavel2 = "Fada";
console.log(typeof(variavel2));

const constante = 'Fada Sensata';
console.log(constante)

//global e local
var escopoGlobal = 'global';
console.log(escopoGlobal);

function escopoLocal() {
    let escopoLocalInterno = 'local'
    console.log(escopoLocalInterno);
}
escopoLocal();

//comparação
var comparacao = '0' == 0;
console.log(comparacao);
//comparação identica (inclusive o tipo da variável)
var comparacaoIdentica = '0' === 0;
console.log(comparacaoIdentica);

//maior que 
var maiorQue = 5 > 2;
console.log(maiorQue);

//menor que
var menorQue = 5 < 2;
console.log(menorQue);

//maior ou igual a
var maiorOuIgual = 5 >= 2;
console.log(maiorOuIgual);

//menor ou igual a 
var menorOuIgual = 5 <= 2;
console.log(menorOuIgual);

//Operador lógico E
var e = true && false;
console.log(e);
//Operador Lógico OU
var ou = true || false;
console.log(ou);
//Operador Lógico NÃO
var nao = !true;
console.log(nao);