let array = ['sring', 1, true, ['array1'], ['array2']];
console.log(array);

//forEach
array.forEach(function(item, index){console.log(item, index)});
//Push
array.push('Add um item no final do array');
console.log(array);
//Pop deleta o último conteúdo da array
array.pop();
console.log(array);
//Shift deleta o primeiro conteúdo da array
array.shift();
console.log(array);
//unshift adiciona um item no index 0
array.unshift('novo item no inicio');
console.log(array);
//retorna o índice de um valor no array
console.log(array.indexOf(true));
//splice
array.splice(0,3);
console.log(array);
//slice
let novoArray = array.slice(0,3);
console.log(novoArray);
//
let object = {string: 'string', number: 1, boolean: true, array: ['array'], objectInterno: {objectInterno: 'objeto interno'}};
console.log(object.objectInterno);

var string = object.string;
console.log(string);

var arrayInterno = object.array;
console.log(arrayInterno);

var {string, boolean, objectInterno} = object;
console.log(string,boolean,objectInterno);
