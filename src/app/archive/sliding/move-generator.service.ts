import { Injectable } from '@angular/core';
import { Hash2SlidingBoard, SlidingBoard2 } from './boardmap';

@Injectable({
  providedIn: 'root',
})
export class MoveGeneratorService {

  V4_moveBlock(slidingBoard : SlidingBoard2, direction : number[], blockId: number): SlidingBoard2 | false {

    //check if move
    for(const item of slidingBoard.lookupTable[blockId]){
      const newRow = item[0] + direction[0];
      const newCol = item[1] + direction[1];
      // Check if the indices are within bounds
      if (
          newRow < 0 ||
          newRow >= slidingBoard.board.length ||
          newCol < 0 ||
          newCol >= slidingBoard.board[0].length
      ) {
        
        return false;
      }

      const tileNumber : number = slidingBoard.board[item[0]+direction[0]][item[1]+direction[1]]
      if( tileNumber != blockId && tileNumber != 0){
        
          return false
        }  
    }

    //execute move
    for(const item of slidingBoard.lookupTable[blockId]){
      slidingBoard.board[item[0]][item[1]] = 0
    }
    
    let newLookupEntry : number[][] = []
    for(const item of slidingBoard.lookupTable[blockId]){
      slidingBoard.board[item[0]+direction[0]][item[1]+direction[1]] = blockId
      newLookupEntry.push( [item[0]+direction[0], item[1]+direction[1]] )
    }

    //update lookup table
    slidingBoard.lookupTable[blockId] = newLookupEntry;

    return slidingBoard
  }

  simpleHash(value: SlidingBoard2): number {
    let a = JSON.stringify(value);
    let hash = 0;
    if (a.length === 0) return hash;
    for (let i = 0; i < a.length; i++) {
      const char = a.charCodeAt(i);
      hash = (hash << 5) - hash + char; // Left shift and subtract
      hash |= 0; // Convert to 32-bit integer
    }
    return hash;
  }

  bfs(slidingBoard : SlidingBoard2): SlidingBoard2[] {
    console.log("starting: Breadth-first search")
    let solutionFound: boolean = false;
    const startBoard = JSON.parse(JSON.stringify(slidingBoard))
    const failsafeThreshold: number = 300_000; // THE SHERE KNOWLEDGE
    // THAT TIMELINE-BASED BUGS EXISTS MAKES THIS A VERY UNSAFE LANGUAGE
    let failsafe: number = 0;
    let frontierBoard: SlidingBoard2 = slidingBoard;
    let queue: SlidingBoard2[] = [frontierBoard];
    const DIRECTIONS: number[][] =  [[1, 0], [-1, 0], [0, -1], [0, 1]];
    let hashList: Set<number> = new Set();
    let boardsChecked: number = 0;
    let hashMap : {[key: number]: number} = {};
    let visitedMap : {[key: number]: SlidingBoard2} = {};

    while (
      !solutionFound && //breaks loop when done
      failsafe < failsafeThreshold && //prevents over-heating
      queue.length > 0 //breaks if no solution found
    ) {
      failsafe += 1;

      frontierBoard = queue.shift()!;

      for (const key of Object.keys(frontierBoard.lookupTable)) {
        for (const direction of DIRECTIONS) {
          const newBoardOrFalse = this.V4_moveBlock( this.copyGameState(frontierBoard), direction, Number(key));

          boardsChecked += 1;

          if (newBoardOrFalse) {

            //hash
            const hash: number = this.simpleHash(
             newBoardOrFalse
            );

            if (!hashList.has(hash)) {
              hashList.add(hash);
              queue.push(newBoardOrFalse);
              visitedMap[hash] = newBoardOrFalse; //TODO: I can be used instead of hashList
              hashMap[hash] = this.simpleHash(frontierBoard)

            }

            //check if newBoardOrFalse matches victoryCondition
            for (const item of newBoardOrFalse.lookupTable[1]){
              if(JSON.stringify(item) == JSON.stringify(newBoardOrFalse.victoryIndex)){
                console.log("bfs", true)
                this.endOfSearchTree({boardsChecked: boardsChecked})
                //return [JSON.parse(JSON.stringify(newBoardOrFalse))];
                return this.backtracking(startBoard, visitedMap, JSON.parse(JSON.stringify(newBoardOrFalse)), hashMap)
              }
             
            }
          }
        }
      }
    }
   
    console.log("bfs", false)
    return [slidingBoard];
  }

  backtracking(startBoard : SlidingBoard2, visitedMap: Hash2SlidingBoard, victoryIndexBoard: SlidingBoard2, hashMap: any): SlidingBoard2[] {
    //explanation: there is a hashmap in the form of "child: parent" to get a path of hashes.
    // then we have visitedMap, that stores the unqiue SlidingBoards for reference and construction of the path
    let path : SlidingBoard2[]= [victoryIndexBoard]; // list of strings
    let frontierBoardHash = this.simpleHash(victoryIndexBoard);
    const endHash : number = this.simpleHash(startBoard);
    let failSafe = 0;
    const failSafeLimit = Object.keys(visitedMap).length;
    let isVictoryCondition = false;
    //return [victoryIndexBoard]  

    //we just jump from hash to hash
    while (failSafe < failSafeLimit && !isVictoryCondition) {
      failSafe += 1;

      frontierBoardHash = hashMap[frontierBoardHash];
      let item : SlidingBoard2 = visitedMap[frontierBoardHash]
      path.push(item)

      // 0: magic number found
      if (frontierBoardHash == endHash) {
        isVictoryCondition = true;
      }
    }

    path = path.reverse()
    console.log(path)
    return path;
  }

  copyGameState(board: SlidingBoard2): SlidingBoard2 {
    return JSON.parse(JSON.stringify(board));
  }

  endOfSearchTree(a: any) {
    console.log(a);
  }

  createLookupTable(board : number[][]) : {[key: string]: number[][]} {
    let lookupTable : {[key: string]: number[][]}= {}

  for(let i = 0; i<board.length; i++){
      const row = board[i]
      for(let j = 0; j<row.length; j++){
          const item = board[i][j];
          if(item != -1 && item != 0){
            lookupTable[item] ? lookupTable[item].push([i,j]) : lookupTable[item] = [ [i,j] ]
          }
      }
  }
  return lookupTable
  }

}
