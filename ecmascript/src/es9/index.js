const obj = {
name: 'daniel',
age: 34,
country: 'Mx'
};

let {name, ...all }= obj;
console.log(name, all);
/*
let {country, ...all} = obj;
console.log(all);*/


//unir-conbinar objetos

const obj1 = {
    ...obj,
    country: 'MX'
}
console.log(obj1);


const hellloWorld = () => {
    return new Promise ((resolve, reject) => {
        (true)
        ? setTimeout(()=> resolve ('Hello World'),3000)
        : reject (new Error ('Test--Error'))
    });
};

hellloWorld()
.then(response=> console.log(response))
.catch (error => console.log(error))
.finally(()=> console.log('Finalizado'))

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2022-03-31');
const year = match[1]
const month = match[2]
const day = match[3]
console.log(year, month, day);
