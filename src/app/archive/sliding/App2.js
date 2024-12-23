let board = [
  [  -1, -1, 1, -1, -1,-1],
  [  7, 3, 3, 0, 0, -1],
  [  7, 3, 3, 4, 4, -1],
  [  0, 0, 5, 5, 6, -1],
  [  0, 0, 5, 5, 8, -1],
  [  -1, -1, 0, -1,  -1 ,-1]
]

let lookupTable = {}

for(let i = 0; i<board.length; i++){
    const row = board[i]
    for(let j = 0; j<row.length; j++){
        const item = board[i][j];
        if(item != -1 && item != 0){
          lookupTable[item] ? lookupTable[item].push([i,j]) : lookupTable[item] = [ [i,j] ]
        }
        
    
    }
}
console.log(lookupTable)