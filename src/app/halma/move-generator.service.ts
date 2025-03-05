import { Injectable } from '@angular/core';
//import { neighborMarbles } from './NeighborMarbles';
import { Move, TraversalPath, TraversalPath2 } from './Move';
import { indexToString } from './IndexToString';
import { jumpIndice } from './JumpIndice';
import { neighborMarbles } from './NeighborMarbles';

@Injectable({
  providedIn: 'root',
})
export class MoveGeneratorService {
  //variables

  constructor() {}

  /*TODO:
   * board (arbitrary word) to coordinates => index of 0 => '[0,12]' => {left: '176.47058823529412px',top: '100px', neighbors: [1,2] }
   */

  getJumpMovesByIndex(board: number[], startIndex: number): number[][] {
    let jumpTraversalPaths: number[][] = [];

    jumpIndice[startIndex].forEach((jumpIndex) => {
      if (
        board[jumpIndex.neighbor] !== 0 &&
        board[jumpIndex.targetLocation] === 0
      ) {
        jumpTraversalPaths.push([startIndex, jumpIndex.targetLocation]);
      }
    });

    //stores ALL possible moves
    let finalTraversalPaths: number[][] = [];
    let traversalSearchExhausted = false;
    const failfafeThreshold = 50;
    let failsafe = 0;
    let visistedIndice = new Set([startIndex]);

    while (!traversalSearchExhausted && failsafe < failfafeThreshold) {
      failsafe++;

      let currentTraversalPath: number[] = jumpTraversalPaths.shift()!;

      if (currentTraversalPath === undefined) {
        traversalSearchExhausted = true;
        break;
      }

      const newFrontierIndex: number = currentTraversalPath.at(-1)!;

      jumpIndice[newFrontierIndex].forEach((jumpIndex) => {
        if (
          board[jumpIndex.neighbor] !== 0 &&
          board[jumpIndex.targetLocation] === 0 &&
          !visistedIndice.has(jumpIndex.targetLocation) //prevent triangle loop
        ) {
          jumpTraversalPaths.push([
            ...currentTraversalPath,
            jumpIndex.targetLocation,
          ]);
        }
      });
      //now all moves of currentTraversalPath have been added to jumpTraversalPaths
      //TODO: Document me, maybe with drawio?
      visistedIndice.add(currentTraversalPath[currentTraversalPath.length - 1]);
      finalTraversalPaths.push(currentTraversalPath);
    }
    return finalTraversalPaths;
  }

  generateEligibleMovesById(
    board: number[],
    index: number,
    playerId: number
  ): number[][] {
    //TODO: remove any
    let jumpableMoves: number[][] = [];

    const neighbors: number[][] = neighborMarbles[index]
      .filter((neighbor) => board[neighbor] === 0)
      .map((neighbor) => [index, neighbor]);

    jumpableMoves = this.getJumpMovesByIndex(board, index);

    const finalTraversalPaths = neighbors.concat(jumpableMoves);

    return finalTraversalPaths;
  }

  evaluateBoard(board: number[]): number {
    //using the heuristic of the sum of the distances of the marbles to the goal

    return -Infinity;
  }

  //TODO: PlayerID is overall useless here
  initBoard(board: number[]): number[] {
    for (let i = 0; i < 10; i++) {
      board[i] = 1;
    }
    [19, 20, 21, 22, 32, 33, 34, 44, 45, 55].forEach((i) => (board[i] = 2));

    [74, 84, 85, 95, 96, 97, 107, 108, 109, 110].forEach((i) => (board[i] = 3));

    [111, 112, 113, 114, 115, 116, 117, 118, 119, 120].forEach(
      (i) => (board[i] = 4)
    );
    [65, 75, 76, 86, 87, 88, 98, 99, 100, 101].forEach((i) => (board[i] = 5));
    [10, 11, 12, 13, 23, 24, 25, 35, 36, 46].forEach((i) => (board[i] = 6));
    return board;
  }
}
