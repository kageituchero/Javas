//1. Verificação de Par ou Ímpar:
/*
let n1 = prompt("Digite um numero")

function verificarPar(n1) {
    if (n1 % 2 == 0) {
        console.log("Par");
    } else {
        console.log("Impar");
    }
}

verificarPar(n1);
*/



//2. Operações Matemáticas Simples:
/*
function calcular(n1,n2) {
    const soma = n1 + n2;
    console.log(soma)

    const sub = n1 - n2;
    console.log(sub)

    const mult = n1 * n2;
    console.log(mult)

    const div = n1 / n2;
    console.log(div)
};


let num1 = parseFloat(prompt("Digite um numero"))
let num2 = parseFloat(prompt("Digite outro numero"))
calcular(num1,num2);
*/



//3. Laço While para Contagem Regressiva:
/*
let n = 11;
let x = 0

while (n > 1) {
    n--;
    x -= n
  console.log(n);
}
*/



//4. Manipulação de Strings:
/*
let str = 'JavaScript'

function inverterTexto(str) {
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    console.log(joinArray)
}
 inverterTexto(str)
*/



//5. Contagem de Caracteres em uma String:
/*
let str = 'cachorro'

function contarCaracters(){
    let myString = str.length;
    console.log(myString);
}
contarCaracters(str)
*/



//6. Acessando Propriedades de Objetos:
/*
var meuCarro = new Object();
meuCarro.fabricacao = "Ford";
meuCarro.modelo = "Pinto";
meuCarro.ano = 1974;

console.log(meuCarro);
*/



//7. Função com Parâmetros Opcionais:
/*
let nome = prompt('digite seu nome')
function mensagemPersonalizada(nome, mensagem = 'Olá'){ 
    console.log(mensagem + ' ' + nome)
}
mensagemPersonalizada(nome, mensagem = 'Olá')
*/



//8. Calculadora de Média:
/*
let n1 = parseInt(prompt('Digite o primeiro número'))
let n2 = parseInt(prompt('Digite o segundo número'))
let n3 = parseInt(prompt('Digite o terceiro número'))

function media(n1,n2,n3){
    let media
    let soma
    soma = n1+n2+n3
    media = soma/3
console.log(soma)
console.log(media)

}
media(n1,n2,n3)
*/


