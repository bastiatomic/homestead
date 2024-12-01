//TODO: Work with sets to speed up lookup

import { Injectable } from '@angular/core';
import { BoardMap } from './boardmap';

@Injectable({
  providedIn: 'root',
})
export class MoveGeneratorService {
  moveBlock(
    boardMap: BoardMap,
    blockId: number,
    direction: number
  ): BoardMap | false {
    // moveBlock(...) always creates a shallow-copy
    boardMap = { ...boardMap };

    const indiceToBeMoved: number[] = boardMap[blockId]; //shallow copy again
    const expectedNewIndice: number[] = indiceToBeMoved.map(
      (number) => number + direction
    );

    for (const indice of expectedNewIndice) {
      if (
        !boardMap[0].includes(indice) &&
        !boardMap[blockId].includes(indice)
      ) {
        return false;
      }
    }

    //moving is possible, continue
    boardMap[blockId] = [];
    const combination: number[] = expectedNewIndice.concat(indiceToBeMoved);
    for (const item of combination) {
      if (!boardMap[0].includes(item)) {
        boardMap[0].push(item);
      }
    }

    for (const item of expectedNewIndice) {
      const indexInsideZeroKey: number = boardMap[0].indexOf(item);
      if (indexInsideZeroKey < 0) {
        console.log('ERROR');
      }
      boardMap[0].splice(indexInsideZeroKey, 1);
      boardMap[blockId].push(item);
    }
    return boardMap;
  }

  simpleHash(value: string): number {
    let hash = 0;
    if (value.length === 0) return hash;
    for (let i = 0; i < value.length; i++) {
      const char = value.charCodeAt(i);
      hash = (hash << 5) - hash + char; // Left shift and subtract
      hash |= 0; // Convert to 32-bit integer
    }
    return hash;
  }

  bfs(boardMap: BoardMap, width: number, victoryIndex: number): BoardMap {
    let solutionFound: boolean = false;
    const failsafeThreshold: number = 100; // THE SHERE KNOWLEDGE
    // THAT TIMELINE-BASED BUGS EXISTS MAKES THIS A VERY UNSAFE LANGUAGE
    let failsafe: number = 0;
    let frontierBoard: BoardMap = boardMap;
    let queue: BoardMap[] = [frontierBoard];
    const DIRECTIONS: number[] = [-1, 1, -width, width];
    let hashList: Set<number> = new Set();
    let boardsChecked: number = 0;

    while (
      !solutionFound &&
      failsafe < failsafeThreshold &&
      queue.length > 0
    ) {
      failsafe += 1;

      frontierBoard = queue.shift()!;

      for (const key of Object.keys(frontierBoard)) {
        for (const direction of DIRECTIONS) {
          const newBoardOrFalse = this.moveBlock(
            this.copyGameState(frontierBoard),
            Number(key),
            direction
          );

          boardsChecked += 1;

          if (newBoardOrFalse) {
            if (newBoardOrFalse[1].includes(victoryIndex)) {
              console.log('WINNING');
              solutionFound = true; //can be purged because of the return statement
              boardMap = newBoardOrFalse
              break;
            }
            const hash: number = this.simpleHash(
              JSON.stringify(newBoardOrFalse)
            );

            if (!hashList.has(hash)) {
              hashList.add(hash);
              queue.push(newBoardOrFalse);
            }
          }
        }
      }
    }
    console.log(queue, failsafe);
    console.log(boardMap);
    return boardMap;
  }

  copyGameState(board: BoardMap): BoardMap {
    return JSON.parse(JSON.stringify(board));
  }
}
