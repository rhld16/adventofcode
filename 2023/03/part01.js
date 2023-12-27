const fs = require('fs');
const input = fs.readFileSync('./input.txt', 'utf8').trim();
const rows = input.split('\n');
const grid = rows.flatMap(i => i.split(''));
const rowLength = rows[0].length;

const symbols = [];
for (let i = 0; i < grid.length; i++) {
    if (['+','*','#','&','@','=','/','-','&','%','$'].includes(grid[i])) {
        symbols.push({
            x: (i % rowLength) + 1,
            y: Math.floor(i / rowLength) + 1
        });
    }
}

const adjacent = Math.sqrt(2);
function adjacentTest(coord) {
    for (let symbol of symbols) {
        if (Math.sqrt((coord.x-symbol.x)**2 + (coord.y-symbol.y)**2) <= adjacent && !(coord.x == symbol.x && coord.y == symbol.y)) {
            return true;
        }
    }
    return false;
}

const partNumbers = [];
const gridString = grid.join('');
for (let i = 0; i < grid.length; i++) {
    if (!grid[i].match(/[0-9]/g)) continue;
    if (adjacentTest({
        x: (i % rowLength) + 1,
        y: Math.floor(i / rowLength) + 1,
    })) {
        const lineStart = i - (i % rowLength), lineEnd = i + (rowLength - (i % rowLength));
        const line = gridString.substring(lineStart, lineEnd);

        let startIndex = i - lineStart;
        let endIndex = startIndex;
        while (endIndex < lineEnd && !isNaN(line[endIndex])) endIndex++;
        while (startIndex >= 0 && !isNaN(line[startIndex])) startIndex--;
        startIndex++;

        const extractedNumber = Number(line.substring(startIndex, endIndex));

        if (!partNumbers.slice(-1).includes(extractedNumber)) {
            partNumbers.push(extractedNumber);
        }
    }
}

const sumOfParts = partNumbers.reduce((acc, curr) => acc + curr, 0);
console.log(sumOfParts);