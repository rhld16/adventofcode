const fs = require('fs');
const input = fs.readFileSync('./input.txt', 'utf8').trim();

let sum = 0;
for (let line of input.split('\n')) {
    const numbers = [...line.matchAll(/(\d)/g)];
    const number = parseInt(numbers[0][0].toString() + numbers[numbers.length - 1][0].toString());
    sum += number;
}

console.log(sum);