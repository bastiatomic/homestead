let a = {
    board: [ //9: wall, 0: empty
      9,9,9,1,9,9,9,
      9,2,3,3,0,0,9,
      9,2,3,3,4,4,9,
      9,0,0,5,5,6,9,
      9,0,0,5,5,7,9,
      9,9,9,0,9,9,9,
    ],
    width: 7,
    height: 6,
    hash:0,
    name: "[CV058] Get the Ball Out! 1",
};

let queue = {}

for(let i = 0; i<3; i++){
    queue.push({...a})
    queue.push({
        board: [ //9: wall, 0: empty
          9,9,9,1,9,9,9,
          9,2,3,3,0,0,9,
          9,2,3,3,4,4,9,
          9,0,0,5,5,6,9,
          9,0,0,5,5,7,9,
          9,9,9,0,9,9,9,
        ],
        width: 7,
        height: 6,
        hash:0,
        name: "[CV058] Get the Ball Out! 1",
    })
}

a["board"] = 0

console.log(queue)

