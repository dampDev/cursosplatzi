function newfunction(name, age, country){
var name = name || 'daniel';
var age = age || 32;
var country = country || 'MX';
console.log(name, age, country);
}


//es6

function newfunction2(name='daniel', age= 32,country="mx"){
    console.log(name,age,country);

}
newfunction2();
newfunction2('paula','12','mexicana')

// 
let hello = "hello";
let world = "world";
let epicphrase = hello+ ' '+ world;
console.log(epicphrase);

let epicphrase2 = `${hello} ${world}`;
console.log(epicphrase2);