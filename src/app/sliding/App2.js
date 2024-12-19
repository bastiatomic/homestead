let board = [
    [  99,99, 99, 1, 99, 99, 99 ],
    [  99,7, 3, 3, 0, 0, 99 ],
    [  99,7, 3, 3, 4, 4, 99 ],
    [ 99, 0, 0, 5, 5, 6, 99 ],
    [ 99, 0, 0, 5, 5, 8, 99 ],
    [  99,99, 99, 0, 99, 99, 99 ]
]

let lookupTable = {}

for(let i = 0; i<board.length; i++){
    const row = board[i]
    for(let j = 0; j<row.length; j++){
        const item = board[i][j];
        lookupTable[item] ? lookupTable[item].push([i,j]) : lookupTable[item] = [ [i,j] ]
    
    }
}
console.log(lookupTable)