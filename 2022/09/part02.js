const fs = require('fs');
const input = fs.readFileSync('./input.txt', 'utf8').trim().split('\n');

let rope = new Array(10).fill(null).map(() => ({ x: 0, y: 0 }));
let tailPositions = new Set();
let maxD = Math.sqrt(2), cornerD = Math.sqrt(1+2**2);

const getRopeDistance = (knotN) => Math.sqrt((Math.abs(rope[knotN].y - rope[knotN - 1].y))**2 + (Math.abs(rope[knotN].x-rope[knotN - 1].x))**2);

for (let instruction of input) {
  let [direction, distance] = instruction.split(' ')
  distance = parseInt(distance);
  for (let i = 0; i < distance; i++) moveRope(direction);
}

function moveRope(direction) {
  switch (direction) {
    case "D":
      rope[0].y--;
      for (let i = 1; i < 10; i++) {
        let ropeDistance = getRopeDistance(i);
        if (ropeDistance == cornerD) {
            if (rope[i - 1].x < rope[i].x) {
                rope[i].x--;
            } else {
                rope[i].x++;
            }
        }
        if (ropeDistance > maxD) rope[i].y--;
      }
      break;
    case "U":
      rope[0].y++;
      for (let i = 1; i < 10; i++) {
        let ropeDistance = getRopeDistance(i);
        if (ropeDistance == cornerD) {
            if (rope[i - 1].x < rope[i].x) {
                rope[i].x--;
            } else {
                rope[i].x++;
            }
        }
        if (ropeDistance > maxD) rope[i].y++;
      }
      console.log(rope[4]);
      break;
    case "L":
      rope[0].x--;
      for (let i = 1; i < 10; i++) {
        let ropeDistance = getRopeDistance(i);
        if (ropeDistance == cornerD) {
            if (rope[i - 1].y < rope[i].y) {
                rope[i].y--;
            } else {
                rope[i].y++;
            }
        }
        if (ropeDistance > maxD) rope[i].x--;
      }
      break;
    case "R":
      rope[0].x++;
      for (let i = 1; i < 10; i++) {
        let ropeDistance = getRopeDistance(i);
        if (ropeDistance == cornerD) {
            if (rope[i - 1].y < rope[i].y) {
                rope[i].y--;
            } else {
                rope[i].y++;
            }
        }
        if (ropeDistance > maxD) rope[i].x++;
      }
      break;
  }
  tailPositions.add(`${rope[9].x},${rope[9].y}`);
}

console.log(tailPositions.size);