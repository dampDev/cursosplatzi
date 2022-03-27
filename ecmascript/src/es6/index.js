<<<<<<< HEAD
function newfunction (name, age country){
    var name = name || 
    var age = age || 32;
    var country = country || 'MX';
    console.log(name, ager, country);
}

// es6

function newFunction2(name = 'daniel', age= 32, country='Mexico') {
    console.log(name,age,country);
    
}
=======
function newfunction(name, age, country) {
    var name = name || 'daniel';
    var age = age || 32;
    var country = country || 'MX';
    console.log(name, age, country);
}


//es6

function newfunction2(name = 'daniel', age = 32, country = "mx") {
    console.log(name, age, country);

}
newfunction2();
newfunction2('paula', '12', 'mexicana')

// 
let hello = "hello";
let world = "world";
let epicphrase = hello + ' ' + world;
console.log(epicphrase);

let epicphrase2 = `${hello} ${world}`;
console.log(epicphrase2);

let lorem = "sdfsdf sdñifsdfisd sd isjdfsd fsdf  \n"
    + "otra frase epica que necesitamos"

let lorem2 = `nueva frase con ecmascript 6
aqui va la nueva frase 2`

console.log(lorem);
console.log(lorem2);

//objetos

let person = {
    'name': 'daniel',
    'age': 34,
    'country': 'Mexico'
}
console.log(person.name, person.age);


let { name, age } = person;
console.log(name);

let team1 = ['danie', 'alejandra', 'paula'];
let team2 = ['alberto', 'danielito', 'wilber'];

let education = ['david', ...team1, ...team2];

console.log(education);

var hola = 'hola';

{
    var globalVar = "global var";
}
{
    let globalLet = "global let";
    console.log(globalLet);
}

console.log(globalVar);

const a = 'b';
a= 'a'// nose puede reasignar 
console.log(a);

let name = 'daniel';
let age = 34;

//es5
obj = {name: name, age: age};
//es6
obj2 = {name, age};
console.log(obj2);


const names = [
    {name: 'daniel', age:34},
    {name: 'paula', age:12}
]

let ListOfNames= name.map(function(item){
    console.log(item.name);

});

let listOfNames2 = names.map(item=> console.log(item.name));

const listOfNames3 = (name, age, country) =>{
    ...
}

const listOfNames4 = name=>{
    ....
}

const squere = num => num * num;

//promesas

const helloPromise = () => {
    return new Promise((resolve, reject)=>{
        if(false) {
            resolve('hey');
        }else {
            reject('Ups!!');
        }
    });
}

helloPromise()
.then(response=>console.log(response))
.then(()=> console.log('hola'))
.catch(error => console.log(error));

class calculator {
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }
    suma(valueA,valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}
const calc = new calculator();
console.log(calc.suma(2,6));

import{hello} from './module';
hello();

function*helloWorld(){
    if(true){
        yield 'Hello,';
    }
    if (true){
        yield 'World';
    }
};

const generatorHello = helloWorld;
console.log(generatorHello.next().value);
>>>>>>> 293bdaf3353734524ae4ba69d86d4a4ae509ec91
