const fs = require('fs');
const input = fs.readFileSync('./input.txt', 'utf8').trim();

let [seeds, ...maps] = input.matchAll(/[ \w-]+:(?:\n| )([\d \n]+)/gim);
maps = maps.map(i => i[1].replaceAll('\n', ' ').trim());

for (let map of maps) {
    const nums = map.split(' ');
    console.log(nums)
    const triads = nums.length / 3;
    for (let i = 0; i < triads; i=i+3) {
        console.log(nums[i], nums[i+1], nums[i+2])
    }
}