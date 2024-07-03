const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf8').trim();
const moves = input.split('\n');

let head = {x:0, y:0};
let tail = {x:0, y:0};
const tailPosition = new Set();

for (let move of moves) {
    let [direction, distance] = move.split(' ');
    distance = parseInt(distance);

    for (let step = 0; step < distance; step++) {
        if (direction == 'R') {
            head.x++;
            if (Math.abs(head.x - tail.x) > 1) {
                tail.x++;
                if (tail.y > head.y) {
                    tail.y--;
                } else if (tail.y < head.y) {
                    tail.y++;
                }
            }
        }
        if (direction == 'L') {
            head.x--;
            if (Math.abs(head.x - tail.x) > 1) {
                tail.x--;
                if (tail.y > head.y) {
                    tail.y--;
                } else if (tail.y < head.y) {
                    tail.y++;
                }
            }
        }
        if (direction == 'U') {
            head.y++;
            if (Math.abs(head.y - tail.y) > 1) {
                tail.y++;
                if (tail.x > head.x) {
                    tail.x--;
                } else if (tail.x < head.x) {
                    tail.x++;
                }
            }
        }
        if (direction == 'D') {
            head.y--;
            if (Math.abs(head.y - tail.y) > 1) {
                tail.y--;
                if (tail.x > head.x) {
                    tail.x--;
                } else if (tail.x < head.x) {
                    tail.x++;
                }
            }
        }
        tailPosition.add(tail.x + ',' + tail.y);
    }
}

console.log(tailPosition.size);

