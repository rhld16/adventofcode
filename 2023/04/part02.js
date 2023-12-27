const fs = require('fs');
const input = fs.readFileSync('./input.txt', 'utf8').trim();

const cards = input.replaceAll('Card ', '').split('\n').map(i => i.split(':')[1].split('|').map(i => i.match(/(\d+)/g)));
const cachedWins = [];
let sum = 0;

for (const id in cards) scratchCard(id, cards[id]);

function scratchCard(id, card) {
	sum++;
	if (cachedWins[id] == undefined) cachedWins[id] = card[1].filter(num => card[0].includes(num)).length;
    for (let i=1;i<cachedWins[id]+1;i++){
        const newId = parseInt(id) + i;
        scratchCard(newId, cards[newId]);
    }
}

console.log(sum);