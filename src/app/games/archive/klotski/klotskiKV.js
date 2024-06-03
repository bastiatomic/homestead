function arraysHaveSameNumbers(arr1, arr2) {
    // Check if the arrays have the same length
    if (arr1.length !== arr2.length) {
        return false;
    }

    // Sort the arrays
    arr1.sort((a, b) => a - b);
    arr2.sort((a, b) => a - b);

    // Check if each corresponding element is the same
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }

    // If all elements are the same, return true
    return true;
}


function validMove(boardMap, frontierId, emptyId, direction){

    let a1 = boardMap[frontierId];
    let x1 = boardMap[emptyId];


    let a2 = a1.map(item => item+direction)
    let x2 = []

    boardMap[frontierId] = a2;
    boardMap[emptyId] = x2

    return boardMap

    //if number in x: swap them based on their indice
    // if number in f: do nothing
    // else: return invalidMoveCall

}

function stringToMap(a){

    let map = {}
    for(let i=0; i<a.length; i++){
        let char = a.charAt(i)
        if(map[char]){
            map[char].push(i)
        } else{
            map[char] = [i]
        }
    }

    return map;

}


function main(){
    let n = -1;
    let initBoardMap = {
        z: [
           0,  1,  2,  3,  4,  5,  6,  7,
           8,  9, 11, 12, 13, 14, 20, 21,
          27, 28, 34, 35, 41, 42, 43, 44,
          46, 47, 48
        ],
        a: [ 10 ],
        b: [ 15, 22 ],
        c: [ 16, 17, 23, 24 ],
        x: [
          18, 19, 29, 30,
          36, 37, 45
        ],
        h: [ 25, 26 ],
        f: [ 31, 32, 38, 39 ],
        d: [ 33 ],
        e: [ 40 ]
      }

    let newBoard = {
        a: [25,26,19,27,33],
        x: [18,24,32,42,5,17]
    }

    console.log(newBoard)
    console.log(validMove(newBoard, "a", "x", n))

    let start = performance.now()
    for(let i = 0; i<10000; i++){
        validMove(initBoardMap, "f", "x", n)
    }

    let end = performance.now()
    console.log(`Time: ${end-start} ms`)
}

main()

//TODO: swap ONLY???

/**
 * et initBoardMap = {
        z: [
           0,  1,  2,  3,  4,  5,  6,  7,
           8,  9, 11, 12, 13, 14, 20, 21,
          27, 28, 34, 35, 41, 42, 43, 44,
          46, 47, 48
        ],
        a: [ 10 ],
        b: [ 15, 22 ],
        c: [ 16, 17, 23, 24 ],
        x: [ 18, 19, 36, 37, 45, 29, 30],
        h: [ 25, 26 ],
        f: [ 31, 32, 38, 39 ],
        d: [ 33 ],
        e: [ 40 ]
      }
 */