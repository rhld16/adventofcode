const fs = require('fs');
const input = fs.readFileSync('./input.txt', 'utf8').trim().split('\n');

let rope = [{x:0,y:0},{x:0,y:0}];
let tailPositions = new Set();
let maxD = Math.sqrt(2), cornerD = Math.sqrt(1+2**2);

const getRopeDistance = () => Math.sqrt((Math.abs(rope[1].y - rope[0].y))**2 + (Math.abs(rope[1].x-rope[0].x))**2);

for (let instruction of input) {
  let [direction, distance] = instruction.split(' ')
  distance = parseInt(distance);
  for (let i = 0; i < distance; i++) moveRope(direction);
}

function moveRope(direction) {
  switch (direction) {
    case "D":
      rope[0].y--;
      if (getRopeDistance() == cornerD) rope[1].x = rope[0].x;
      if (getRopeDistance() > maxD) rope[1].y--;
      break;
    case "U":
      rope[0].y++;
      if (getRopeDistance() == cornerD) rope[1].x = rope[0].x;
      if (getRopeDistance() > maxD) rope[1].y++;
      break;
    case "L":
      rope[0].x--;
      if (getRopeDistance() == cornerD) rope[1].y = rope[0].y;
      if (getRopeDistance() > maxD) rope[1].x--;
      break;
    case "R":
      rope[0].x++;
      if (getRopeDistance() == cornerD) rope[1].y = rope[0].y;
      if (getRopeDistance() > maxD) rope[1].x++;
      break;
  }
  tailPositions.add(`${rope[1].x},${rope[1].y}`);
}

console.log(tailPositions.size);