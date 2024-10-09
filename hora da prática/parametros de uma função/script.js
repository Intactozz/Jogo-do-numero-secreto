
//Criar uma função que exibe "Olá, mundo!" no console.
function verNome() {
    console.log("Olá Mundo!");
}
verNome();

//Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function olaNome(nome) {
    console.log(`Olá ${nome}!`);
}
olaNome(`Douglas`);

//Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function dobro(vezes2) {
    return vezes2 * 2; //retorna o dobro do número
}

let resultado = dobro(8); //Passa um número em vez de string
console.log(resultado);

//Criar uma função que recebe três números como parâmetros e retorna a média deles.

function media(num1, num2, num3) {
    return (num1 + num2 + num3) / 3;
}
let resultado2 = media(8, 7, 20);
console.log(`A média é ${resultado2}`);

//Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function maior(numero1, numero2) {
    if (numero1 > numero2) {
        return numero1;
    } else {
        return numero2
    }
}
let maiorNumero = maior(10, 5);

console.log(`O maior número é ${maiorNumero}`);

//Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo

function calcular(numero) {
    return numero * numero
}
resultadNumero = calcular(30)
console.log(resultadNumero)