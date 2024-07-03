const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf8').trim();
const moves = input.split('\n');

const tailLength = 9;
let head = {x:0, y:0};
let tails = [];
for (let i = 0; i < 9; i++) {
    tails[i] = {x:0, y:0};
}
const tailPosition = new Set();

const diagAway = Math.sqrt(Math.pow(1 - 0, 2) + Math.pow(1 - 0, 2));
let moveNumber = 0;

for (let move of moves) {
    let [direction, distance] = move.split(' ');
    distance = parseInt(distance);

    for (let step = 0; step < distance; step++) {
        moveNumber++;
        if (direction == 'R') {
            head.x++;
            for (let i = 0; i < tails.length; i++) {
                let tail = tails[i];
                let prevTail = tails[i-1] || head;
                const distance = Math.sqrt(Math.pow(prevTail.x - tail.x, 2) + Math.pow(prevTail.y - tail.y, 2));
                if (distance > 2) {
                    tail.x++;
                    if (tail.y > prevTail.y) {
                        tail.y--;
                    } else if (tail.y < prevTail.y) {
                        tail.y++;
                    }
                } else if (distance > diagAway) {
                    tail.x = (tail.x + prevTail.x) / 2;
                    tail.y = (tail.y + prevTail.y) / 2;
                }
            }
        }
        if (direction == 'L') {
            head.x--;
            for (let i = 0; i < tails.length; i++) {
                let tail = tails[i];
                let prevTail = tails[i-1] || head;
                const distance = Math.sqrt(Math.pow(prevTail.x - tail.x, 2) + Math.pow(prevTail.y - tail.y, 2));
                if (distance > 2) {
                    tail.x--;
                    if (tail.y > prevTail.y) {
                        tail.y--;
                    } else if (tail.y < prevTail.y) {
                        tail.y++;
                    }
                } else if (distance > diagAway) {
                    tail.x = (tail.x + prevTail.x) / 2;
                    tail.y = (tail.y + prevTail.y) / 2;
                }
            }
        }
        if (direction == 'U') {
            head.y++;
            for (let i = 0; i < tails.length; i++) {
                let tail = tails[i];
                let prevTail = tails[i-1] || head;
                const distance = Math.sqrt(Math.pow(prevTail.x - tail.x, 2) + Math.pow(prevTail.y - tail.y, 2));
                if (i==8) console.log(distance)
                if (distance > 2) {
                    tail.y++;
                    if (tail.x > prevTail.x) {
                        tail.x--;
                    } else if (tail.x < prevTail.x) {
                        tail.x++;
                    }
                } else if (distance > diagAway) {
                    tail.x = (tail.x + prevTail.x) / 2;
                    tail.y = (tail.y + prevTail.y) / 2;
                }
            }
        }
        if (direction == 'D') {
            head.y--;
            for (let i = 0; i < tails.length; i++) {
                let tail = tails[i];
                let prevTail = tails[i-1] || head;
                const distance = Math.sqrt(Math.pow(prevTail.x - tail.x, 2) + Math.pow(prevTail.y - tail.y, 2));
                if (distance > 2) {
                    tail.y--;
                    if (tail.x > prevTail.x) {
                        tail.x--;
                    } else if (tail.x < prevTail.x) {
                        tail.x++;
                    }
                } else if (distance > diagAway) {
                    tail.x = (tail.x + prevTail.x) / 2;
                    tail.y = (tail.y + prevTail.y) / 2;
                }
            }
        }
        tailPosition.add(tails[8].x + ',' + tails[8].y);
        console.log(direction, moveNumber, head, tails[1])
    }
}

console.log(tailPosition.size);