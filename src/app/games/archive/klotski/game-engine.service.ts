import { Injectable } from '@angular/core';
import { Board } from './Board';

export interface visitedMap {
  [key: string]: Board;
}

@Injectable({
  providedIn: 'root',
})
export class GameEngineService {
  boardsEvaluated: number = 0;
  transpositionsFound: number = 0;

  endOfBFS(a: string) {
    console.log(a, 'Boards evaluated:', this.boardsEvaluated, '(playMove())| trans found:', this.transpositionsFound);
    this.boardsEvaluated = 0;
    this.transpositionsFound = 0;
  }

  hash(b: number[]): number {

    let hash = 0;
    for (let i = 0; i < b.length; i++) {
        hash = ((hash << 5) - hash) + b[i]; // Complexify hash calculation
        hash &= hash; // Convert to 32bit integer
    }
    return hash;
  }

  playMove(board: Board, id: number, direction: number): Board | null {
    //loops over the board with o(N) and then applies changes
    
    let oldIndice: number[] = [];
    let newIndice: number[] = [];

    for (let i = 0; i < board.board.length; i++) {
      if (board.board[i] == id) {
        let currentDesiredIndex = i + direction;
        let currentDesiredItem = board.board[currentDesiredIndex];

        if (currentDesiredItem != 0 && currentDesiredItem != id) {
          return null;
        } else {
          //dont care if "id" or "x"
          oldIndice.push(i);
          newIndice.push(currentDesiredIndex);
        }
      }
    }
    oldIndice.forEach((index) => {
      board.board[index] = 0;
    });

    newIndice.forEach((index) => {
      board.board[index] = id;
    });
    //board.board = this.shuffle(board.board)

    board.hash = this.hash(board.board);
    board.movesMade += 1;
    this.boardsEvaluated += 1;
    return JSON.parse(JSON.stringify(board));
  }

  backtracking(visitedMap: visitedMap, victoryIndexBoard: Board): Board[] {
    //TODO: performance is 10/10
    let path = [victoryIndexBoard]; // list of strings
    let frontierBoardHash = victoryIndexBoard.hash;
    let failSafe = 0;
    const failSafeLimit = Object.keys(visitedMap).length;
    let isVictoryCondition = false;

    //we just jump from hash to hash
    while (failSafe < failSafeLimit && !isVictoryCondition) {
      failSafe += 1;

      frontierBoardHash = visitedMap[frontierBoardHash].parentNodeHash;

      // 0: magic number found
      if (frontierBoardHash == 0) {
        isVictoryCondition = true;
      } else {
        path.push(visitedMap[frontierBoardHash]);
      }
    }

    path = path.reverse()
    return path;
  }

  bfs(board: Board): Board[] {
    let isVictoryCondition: boolean = false;
    let parentNodesAnalyzed: number = 0;
    const failSafeLimit: number = 1000000;
    
    const uniqueIds: number[] = [
      ...new Set([...board.board].filter((a) => a != 0 && a != 9))];
    const uniqueDirections: number[] = [-1, 1, -board.width, board.width];

    let queue: Board[] = [board];

    let visitedMap: visitedMap = {}; //store all boards for 'wasVisited' and backtrack

    while (
      queue.length > 0 &&
      parentNodesAnalyzed < failSafeLimit &&
      !isVictoryCondition
    ) {
      parentNodesAnalyzed += 1;

      //queue.forEach((item)=>{console.log(item)})
      //console.log("------------")
      const frontierBoard : Board = queue.shift()!// grab first element

      // check for victoryCondition in frontierBoard
      if (
        frontierBoard.victoryId ==
        frontierBoard.board[frontierBoard.victoryIndex]
      ) {
        isVictoryCondition = true;
        this.endOfBFS('success');
        return this.backtracking(visitedMap, frontierBoard);
      }

      // loop over all neighbors
      for (const id of uniqueIds) {
        for (const direction of uniqueDirections) {
          const childBoard = this.playMove(
            this.copyGameState(frontierBoard),
            id,
            direction
          );
          //move was valid
          if (childBoard) {
            childBoard.parentNodeHash = frontierBoard.hash;

            // a new move has been discovered
            if (!visitedMap[childBoard.hash]) {
              visitedMap[childBoard.hash] = childBoard; // visitedMap[child] = parent //11
              queue.push(childBoard);
            } else{
              //the hash function found the same board again (like moving backwards)
              this.transpositionsFound += 1;
            }
          }
        }
      }

    }
    this.endOfBFS(`error, ${parentNodesAnalyzed}`);
    return [board];
  }
  copyGameState(board:Board){
    //50% faster than JSON/Stringify
    let grid = board.board.map(item => item)
    return {
      board: grid,
      width: board.width,
      height: board.height,
      victoryId: board.victoryId,
      victoryIndex: board.victoryIndex,
      hash: board.hash,
      parentNodeHash:  board.parentNodeHash,
      movesMade: board.movesMade,
      name: board.name,
    } as Board;
  }
}
