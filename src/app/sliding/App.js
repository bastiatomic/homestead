let boardMap = {
  0: [11, 12, 22, 23, 29, 30, 38],
  1: [3],
  2: [8, 15],
  3: [9, 10, 16, 17],
  4: [18, 19],
  5: [24, 25, 31, 32],
  6: [26],
  7: [33],
  9: [0, 1, 2, 4, 5, 6, 7, 13, 14, 20, 21, 27, 28, 34, 35, 36, 37, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48],
};

function moveBlock(boardMap, blockId, direction){
    const indiceToBeMoved = boardMap[blockId];
    const expectedNewIndice = indiceToBeMoved.map(number => number+direction);

    for(const indice of expectedNewIndice){
        if( !boardMap[0].includes(indice) && !boardMap[blockId].includes(indice)){
            return false;
        }
    }
    //moving is possible, continue
    boardMap[blockId] = expectedNewIndice;

    for(const item1 of expectedNewIndice){
        boardMap[0] = boardMap[0].filter(item => item !== item1)
        boardMap[0].push(item1-direction)
    }
   
    return boardMap;
}

// get a hashmap with all blocks and their indice
function initBoardBlockIndice(board) {
  let boardMap = {};
  board.forEach((item, index) => {
    boardMap[item] ? boardMap[item].push(index) : (boardMap[item] = [index]);
  });
  return boardMap;
}

console.log(moveBlock(boardMap, 4, -7))
