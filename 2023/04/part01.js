const fs = require('fs');
const input = fs.readFileSync('./input.txt', 'utf8').trim();

const cards = input.replaceAll('Card ', '').split('\n').map(i => i.split(':')[1].split('|').map(i => i.match(/(\d+)/g)));
let points = 0;
for (const card of cards) {
    let streak = 0;
    card[1].forEach(num => {if (card[0].includes(num)) streak += 1});
    if (streak > 0) points += 2**(streak - 1);
}

console.log(points);