 //https://www.youtube.com/watch?v=8uIUCSv9GGQ  (AULAS ) 50:38h

//TIPO STRING/console.log(helloWord);


//TIPO USER é obrigatório preencher 
/*interface User {
  name: String;
  id: number;
}

const user: User = { // obrigado colocar todas as propriedade do tipo User
  name: "Adriana",
  id: 1
}

// Data types

const string: string = "string";
const number: number = 123;
const boolean: boolean = false;
const bollArray: boolean[] = [true, false];
const strArray: string[] = ["String 1", "String 2"]
const numArray: number [] = [1, 2, 3];

// Quando não sei o que estou recebendo ou tenho um array que recebe outros tipos também passo tipo ANY
const anyType:  any[] = [1, 'string', true] // ou seja serve para QUALQUER tipo , usar pouco , boas práticas



// Numa função que recebe parÂmetros tmb posso colocar o tipo a ser recebido
function greeter(receiver: string) {
  return 'Hello ' + receiver;
}
//console.log(greeter('Adriana'))



function semReturn(receiver: number): void { // quando é função sem retorno void = vazio absoluto
 // console.log(receiver);
}
console.log(semReturn(100))

//a palavra type significa TIPOS CUSTOMIZÁVEIS ou QUANDO ESTOU UNINDO MAIS TIPOS Unio Types
type AllowedTypes = string | string[]; 

const testVar : AllowedTypes = "Adriana"
//const testVar : AllowedTypes = ["eu estudo ", "TypeScript"];

console.log(testVar)

//ENUM 

enum NatureTypes {
  Human = 'human',
  Robot = 'robot',
  Animal = 'animal'
}

const natureEntity = {
  entityType: NatureTypes.Human
  //entityType: NatureTypes  console.log{ entityType: { Human: 'human', Robot: 'robot', Animal: 'animal' } }
}
console.log(natureEntity)



//INTERFACES são como BLOCO


interface Entity { //Construção de objetos
  natureType: NatureTypes;
  name: string;
  code?: number;
  birthdate?: number;
}

const person: Entity = {
  natureType: NatureTypes.Human,
  name: 'Adriana',
  birthdate: 261172,
}

console.log(person)

const android: Entity = {
   natureType: NatureTypes.Robot,
   name: 'TSrobot',
   code: 1234
}

console.log(android)

const shark: Entity = {
  natureType:  NatureTypes.Animal,
  name: 'Baby Shark',
  birthdate: 1022022,

}

//Generics

class Fila {
  private data = [];

  push(item) { this.data.push(item) }
  pop() { return this.data.shift() }
}

const queue  = new Fila()
queue.push(0);
queue.push('1')

console.log(queue)




class Fila1<T>{
  private data = [];

  push(item:T) {
     this.data.push(item) };

  pop(): T | undefined {
    return this.data.shift() 
  } 
}

const queue1  = new Fila1()
queue1.push(0);
queue1.push(1)

console.log(queue1)

*/

