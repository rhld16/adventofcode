const fs = require('fs');
const input = fs.readFileSync('./input.txt', 'utf8').trim();

const limits = { red: 12, green: 13, blue: 14 };
const games = input.replaceAll('Game ', '').split('\n');
const usableGames = games.filter(game => {
    const games = game.split(':')[1].trim().split(';');
    return games.every(i => {
        const choices = i.split(',');
        for (const choice of choices) {
            const [[_, count, color]] = [...choice.matchAll(/(\d+) (\w+)/g)];
            if (limits[color] < parseInt(count)) return false;
        }
        return true;
    });
});

const sumOfGames = usableGames.reduce((acc, curr) => acc + parseInt(curr.split(':')[0]), 0);
console.log(sumOfGames);