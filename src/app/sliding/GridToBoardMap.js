let WIDTH = 8;
let board = [
    9,9,9,9,9,9,9,9,
    9,9,9,1,1,9,9,9,
    9,9,9,1,1,9,9,9,
    9,0,0,0,0,0,0,9,
    9,0,2,2,3,3,0,9,
    9,9,4,2,3,5,9,9,
    9,9,4,4,5,5,9,9,
    9,9,9,6,6,9,9,9,
    9,9,9,9,9,9,9,9,
]
const WALL = 9; const EMPTY = 0;

let map = {}

board.forEach((item, index)=>{
    map[item] ? map[item].push(index) : map[item] = [index]
})

console.log(map)

