const fs = require('fs');
const input = fs.readFileSync('./input.txt', 'utf8').trim();
const map = {
    'one': 'o1e', 'two': 't2o', 'three': 'th3e', 'four': 'f4r', 'five': 'f5e', 'six': 's6x', 'seven': 'se7en', 'eight': 'ei8t', 'nine': 'n9e'
};
let sum = 0;
for (let line of input.split('\n')) {
    for (let i in map) line = line.replaceAll(i, map[i].toString());
    const numbers = [...line.matchAll(/(\d)/g)];
    const number = parseInt(numbers[0][0].toString() + numbers[numbers.length - 1][0].toString());
    sum += number;
}

console.log(sum);