const fs = require('fs');
const input = fs.readFileSync('./input.txt', 'utf8').trim();

const games = input.replaceAll('Game ', '').split('\n');
const minGames = games.reduce((acc, game) => {
    const games = game.split(':')[1].trim().split(';');
    const min = {};
    games.forEach(i => {
        const choices = i.split(',');
        for (const choice of choices) {
            const [[_, count, color]] = [...choice.matchAll(/(\d+) (\w+)/g)];
            min[color] = Math.max(min[color] || 0, count);
        }
    });
    return acc + (min['blue'] * min['red'] * min['green']);
}, 0);

console.log(minGames);