function calculadora() {
  const operacao = Number(prompt("escolha uma operação:\n 1 - adição(+)\n 2 - subtração(-)\n 3 - multiplicação(*)\n\
 4 - divisão real(/)\n 5 - divisão inteira(%)\n 6 - potenciação(**) "));

 if(!operacao || operacao >= 7) {
    alert("operação inválida");
    calculadora();
 }else{
 let n1 = Number(prompt("insira o primeiro valor:"));
 let n2 = Number(prompt("insira o segundo valor:"));
 let resultado;

if(!n1 || !n2) {
    alert("valores incorretos,digite números.");
    calculadora();
}else{
    function adicao() {
        resultado = n1 + n2;
        alert(`${n1} + ${n2} = ${resultado}`);
        novaOperacao();
    }
    
    function subtracao() {
        resultado = n1 - n2;
        alert(`${n1} - ${n2} = ${resultado}`);
        novaOperacao();  
    }
    
    function multiplicacao() {
        resultado = n1 * n2;
        alert(`${n1} * ${n2} = ${resultado}`);
        novaOperacao();
    }
    
    function divisaoReal() {
        resultado = n1 / n2;
        alert(`${n1} / ${n2} = ${resultado}`);
        novaOperacao();
    }
    
    function divisaoInteira() {
        resultado = n1 % n2;
        alert(`o resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`);
        novaOperacao();
    }
    
    function potenciacao() {
        resultado = n1 ** n2;
        alert(`${n1} ** ${n2} = ${resultado}`);
        novaOperacao();
    }
    
    function novaOperacao() {
        let opcao = prompt("deseja fazer outra operação?\n 1-sim\n 2-não");
        if (opcao == 1) {
            calculadora();
        }else if(opcao == 2) {
            alert("até mais!");
        }else{
            alert("digite uma opção válida");
            novaOperacao();
        }
    }
}
 
 /*
if(operacao == 1) {
     adicao();
 }else if(operacao == 2) {
     subtracao();
 }else if(operacao == 3) {
     multiplicacao();
 }else if(operacao == 4) {
     divisaoReal();
 }else if (operacao == 5) {
     divisaoInteira();
 }else if(operacao == 6) {
     potenciacao();
 } */
}


switch (operacao) {
    case 1:
        adicao();
        break;
    case 2:
        subtracao();
        break;
    case 3: 
        multiplicacao();
        break;
    case 4:
        divisaoReal();
         break;
    case 5:
        divisaoInteira();
        break;
    case 6:
        potenciacao();
        break;
}
    



}



calculadora();