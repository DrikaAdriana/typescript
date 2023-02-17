"use strict";
const x = 10;
console.log(x);
const y = 12;
let z = 12;
let firstName = "Adriana";
let age = 50;
let isAdmin = true;
console.log(typeof firstName);
firstName = 'João';
console.log(firstName);
const myNumbers = [1, 2, 3, 4];
console.log(myNumbers);
console.log(myNumbers.length);
console.log(firstName.toUpperCase());
myNumbers.push(5);
console.log(myNumbers);
let myTuple;
myTuple = [10, 'Adriana', ['Tramandai', 'São Paulo']];
const user = {
    name: "Pedro",
    age: 18
};
console.log(user);
let a = 0;
a = 'teste';
a = true;
a = [];
let id = "10";
id = 200;
const codProduto = 10;
const tipoProduto = "Caneta";
const valor = 12.50;
var Tamanho;
(function (Tamanho) {
    Tamanho["P"] = "Pequeno";
    Tamanho["M"] = "M\u00E9dio";
    Tamanho["G"] = "Grande";
})(Tamanho || (Tamanho = {}));
const camisa = {
    name: "Camisa gola V",
    Tamanho: Tamanho.P
};
console.log(camisa);
let teste;
teste = "autenticado";
teste = null;
function soma(a, b) {
    return a + b;
}
console.log(soma(30, 30));
function sayHeloTo(name) {
    return `Hello ${name}`;
}
console.log(sayHeloTo("Adriana"));
function logger(msg) {
    console.log(msg);
}
logger('Teste');
function greeting(name, greet) {
    if (greet) {
        console.log(`Olá ${greet}  ${name}`);
        return;
    }
    console.log(`Olá ${name}`);
}
greeting("José");
greeting("Pedro", "Sr.");
function somandoNumeros(nums) {
    return nums.n1 + nums.n2;
}
console.log(somandoNumeros({ n1: 1, n2: 2 }));
function multiplcarNumeros(nums) {
    return nums.n1 * nums.n2;
}
const someNumeros = {
    n1: 5,
    n2: 10
};
console.log(multiplcarNumeros(someNumeros));
