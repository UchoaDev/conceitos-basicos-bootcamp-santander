/*tipos primitivos*/

/*number*/
var numeros = 1
console.log(typeof(numeros));

/*boolean*/
var VouF = true
console.log(typeof(VouF));

/*string*/
var nome = "Pedro"
console.log(typeof(nome));

/*como declarar*/

var variavel;
variavel = "joão"
variavel = "jonas"
console.log(variavel);

let variavel2;
variavel2 = "henrique"
console.log(variavel2);

const senha = "senhasegura"
console.log(senha);

/*escopo global*/
var escopoGlobal = "global"
console.log(escopoGlobal);

/*escopo local*/
function escopoLocal (){
    let escopolocalinterno = "local"
    console.log(escopolocalinterno);
}
escopoLocal();

/*comparação*/
var comparação = "1" == 1;
console.log(comparação)

/*comparação identica*/
var comparação_identica = "3" === 0;
console.log(comparação_identica);

/*operadores aritméticos*/

/*adição*/
var adicao = 1 + 2;
console.log(adicao);

/*subtração*/
var subtracao = 10 - 5;
console.log(subtracao);

/*multiplicação*/
var multiplicacao = 4 * 2;
console.log(multiplicacao);

/*divisão real*/
var divisao_real = 3 / 2;
console.log(divisao_real);

/*divisão inteira*/
var divisao_inteira = 5 % 2;
console.log(divisao_inteira);

/*potenciação*/
var potenciacao = 2 ** 10;
console.log(potenciacao);

/*operadores relacionais*/

/*maior que */
var maior_que = 5 > 1;
console.log(maior_que);

/*menor que*/
var menor_que = 1 < 0;
console.log(menor_que);

/*maior ou igual*/
var maior_ou_igual = 5 >= 2;
console.log(maior_ou_igual);

/*menor ou igual*/
var menor_ou_igual = 5 <= 2;
console.log(menor_ou_igual);

/*operadores lógicos*/

var e = true && true ;
console.log(e);

var ou = true || false;
console.log(ou);

var nao = !true;
console.log(nao);


