var jogador1 = 0;
var jogador2 = 0;
var placar;

if (jogador1 != -1) {
    if (jogador1 > 0 && jogador2 == 0) {
        console.log('Jogador 1 marcou ponto');
        placar = jogador1 > jogador2;
    } else if (jogador2 > 0 && jogador1 == 0){
        console.log('Jogador 2 marcou ponto');
        placar = jogador2 > jogador1;
    } else {
        console.log('Ninguém marcou ponto');
    }
}
// if ternário
jogador1 != -1 && jogador2 != -1 ? console.log('Os Jogadores são válidos') : console.log('Jogadores Inválidos');

switch (placar) {
    case placar = jogador1 > jogador2:
        console.log('Jogador 1 ganhou');
        break;
        case placar = jogador2 > jogador1:
            console.log('Jogador 2 ganhou');
            break;
            default:
                console.log('Ninguém ganhou');
}
//For
let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5'];
let object = {propriedade1: 'valor1', propriedade2: 'valor2', propriedade3: 'valor3'}
for (let indice = 0; indice < array.length; indice++){
    console.log(indice);
}
//ForIn
for (let i in array) {
    console.log(i);
}
//For com Object
for (i in object) {
    console.log(i);
}
//For OF
for (i of array) {
    console.log(i);
}
//While
var a = 0;
while (a < 10) {
    a++;
    console.log(a);
}
// do while
do {
    a++;
    console.log(a);
} while (a < 10)