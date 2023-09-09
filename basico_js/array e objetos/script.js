/*o que são vetores ou arrays

como declarar um array
let array = ["string", 1, true];
console.log(array);

pode guardar varios tipos de dados, e outros arrays dentro dele
let array = ["string", 1, true, ["array1"], ["array2"], ["array3"]];
console.log(array[2]);

manipulando um array:

foreach
array.forEach(function(item, index){console.log(item, index)});

push - adiciona um novo item ao final do array
array.push("novo item");
console.log(array);

pop - remove um item no final do array
array.pop();
console.log(array);

shift - remove um item no inicio do array
array.shift();
console.log(array);

unshift - adiciona um item no inicio do array
array.unshift("novo item 2");
console.log(array);

indexof - retorna o indice de um valor que esta dentro do array
console.log(array.indexOf("novo item 2"));

splice - remove ou substitui um item pelo indice
array.splice(0, 3);
console.log(array);

slice - retorna uma parte de um array ja exitente
let novoArray = array.slice(0, 3);
console.log(novoArray);
*/

/*objeto*/

let object = {string: "alta", number: 3, boolean: true, array: ["array"], objectInterno: 
{objectInterno: "objeto interno"}};

/*acessando a propriedade de um objeto
console.log(object.string);
*/

/*desestruturação de um objeto, forma 1*/
var string = object.string;
console.log(string);

var number = object.number;
console.log(number);

/*desestruturação de um objeto forma 2*/
var {string, number, objectInterno} = object;
console.log(string, number, objectInterno);