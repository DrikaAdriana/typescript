 


const x: number = 10
console.log(x)

//inferência x annotation
const y = 12 ;
//y = "teste"
let z: number = 12;

// tipos básicos

let firstName: string = "Adriana"
let age: number = 50
let isAdmin: boolean = true
// String != string
console.log(typeof firstName);
firstName = 'João';
console.log(firstName)



//OBJECT
const myNumbers: number[] = [1, 2, 3, 4];

console.log(myNumbers);
console.log(myNumbers.length); 
// console.log(myNumbers.toUpperCase()) esse método não existe pra number
console.log(firstName.toUpperCase());
//usar o alto complete para ter acesso aos métodos atraves (firstName.)
myNumbers.push(5)
console.log(myNumbers)




//TIPO DE DADO
//(tupla)
let myTuple: [number, string, string[]] // seguir na mesma ordem e tipos que esta aqui quando colocar os valores
myTuple = [10, 'Adriana', ['Tramandai', 'São Paulo' ]]



//TIPO DE DADO
// object literals -> {propriedade: valor} nesse formato
const user: {name: string, age: number} = {
  name: "Pedro",
  age: 18
};
console.log(user);


// any usar com cautela pq perde o real signuificado do TypeScript
// Pois aceita qualquer coisa

let a: any = 0;

a='teste';
a= true;
a = [];


//unio type 
//Forma de unir tipos e criar tipos mais complexos

let id: string | number ="10"
id =200

//type alias
//tem como determinar o nome de um typo
type myIdType = number | string // melhor que tipo union 

const codProduto: myIdType = 10
const tipoProduto: myIdType = "Caneta"
const valor: myIdType = 12.50


//enum
//ex: tamanho de roupas
enum  Tamanho{
  P = "Pequeno",
  M = "Médio",
  G = "Grande",
}

const camisa = {
  name: "Camisa gola V",
  Tamanho: Tamanho.P
};
console.log(camisa);



// literal types// não consigo mudar o valor é usado em alternância com o null 
let teste: "autenticado" | null;
teste = "autenticado"; // tipo usauário logado ou não logado
teste = null;

//funções (ARGUMENTOS ou PARAMETROS e RETORNOS tmb podem ser tipados

function soma(a: number , b: number){ // obrigado tipar os parâmentros 
  return a + b 
}
console.log(soma(30, 30))//nesse caso só aceitará números 

function sayHeloTo(name: string): string {
  return `Hello ${name}`
}
console.log(sayHeloTo("Adriana"))


function logger(msg: string): void{//void é o tipo de função que não retorna nada
  console.log(msg);
}
logger('Teste')

function greeting(name: string, greet?: string){// a ? significa que é obrigatório
  if(greet) {
   console.log(`Olá ${greet}  ${name}`)
   return
  } 
  console.log(`Olá ${name}`)


}
greeting("José");
greeting("Pedro","Sr.")




//Interface

interface MathFunctionParams{
    n1: number;
    n2: number;
}

function somandoNumeros(nums: MathFunctionParams){
  return nums.n1 + nums.n2;
}
console.log(somandoNumeros({n1: 1, n2: 2}));

function multiplcarNumeros(nums: MathFunctionParams) {
  return nums.n1 * nums.n2
}

const someNumeros:MathFunctionParams = {
   n1: 5,
   n2: 10
}

console.log(multiplcarNumeros(someNumeros))