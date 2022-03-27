const data = {
    frontend: 'daniel',
    backend: 'paula',
    desing: 'alejandra',
}

const entries = Object.entries(data);
console.log(entries);

console.log(entries.length);

const data1 = {
    frontend: 'daniel',
    backend: 'paula',
    desing: 'alejandra',
}
const values = Object.values(data1);
console.log(values);
console.log(values.length);

const string = 'hello';
console.log(string.padStart(7,'hi'));
console.log(string.padEnd(12,'----'));
console.log('food'.padEnd(12,'----'));

