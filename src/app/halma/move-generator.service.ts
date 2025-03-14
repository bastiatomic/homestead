import { Injectable } from '@angular/core';
import { jumpIndice } from './JumpIndice';
import { basicBoardSetup } from './BasicBoardSetup';
import { indexToString } from './IndexToString';
import { BoardState, PlayerId, goalDistances } from './Interfaces';
import { BehaviorSubject, Observable, Subscription, interval } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoveGeneratorService {
  private boardStateSubject$ = new BehaviorSubject<number[]>([]);
  private updateSubscription: Subscription | null = null;

  constructor() {}

  generateEligibleMovesByIndex(
    board: BoardState,
    startIndex: number
  ): number[][] {
    const finalBasicMoves: number[][] = basicBoardSetup[startIndex].neighbors
      .filter((neighbor) => !board.occupied.has(neighbor))
      .map((neighbor) => [startIndex, neighbor]);

    let jumpTraversalPaths: number[][] = [];

    //TODO: KILL ME (duplicate) AND JUST START WITH AN EMPTY LIST
    jumpIndice[startIndex].forEach((jumpIndex) => {
      if (
        board.occupied.has(jumpIndex.neighbor) &&
        !board.occupied.has(jumpIndex.targetLocation)
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
          board.occupied.has(jumpIndex.neighbor) &&
          !board.occupied.has(jumpIndex.targetLocation) &&
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
    return finalTraversalPaths.concat(finalBasicMoves);
  }

  getDistanceToSpecificIndex(startIndex: number, endIndex: number): number {
    //HOW-TO: Needed for basic evaluation function
    //TODO: Map this to a const for more efficiency
    //TODO: There has to be a way more efficient way!
    //TODO: The pure index is not a valid distance evaluator!!
    //TODO: create mapping!!
    const [x1, y1] = indexToString[startIndex].split(',').map(Number);
    const [x2, y2] = indexToString[endIndex].split(',').map(Number);

    const xOffset = Math.abs(x1 - x2);
    const yOffSet = Math.abs(y1 - y2);

    return xOffset + yOffSet;
  }

  initBoardByBoardState(): BoardState {
    let a: BoardState = {
      1: new Set(),
      2: new Set(),
      3: new Set(),
      4: new Set(),
      5: new Set(),
      6: new Set(),
      occupied: new Set(),
    };

    [0, 1, 2, 29, 42, 5, 6, 7, 8, 51].forEach((i) => a[1].add(i));

    [19, 20, 21, 22, 32, 33, 34, 44, 45, 55].forEach((i) => a[2].add(i));

    [74, 84, 85, 95, 96, 97, 107, 108, 109, 110].forEach((i) => a[3].add(i));

    [111, 112, 113, 114, 115, 116, 117, 118, 119, 120].forEach((i) =>
      a[4].add(i)
    );
    [65, 75, 76, 86, 87, 88, 98, 99, 100, 101].forEach((i) => a[5].add(i));
    [10, 11, 12, 13, 23, 24, 25, 35, 36, 46].forEach((i) => a[6].add(i));

    for (const index of ['1', '2', '3', '4', '5', '6'] as const) {
      for (const value of a[index]) {
        a.occupied.add(value);
      }
    }

    return a;
  }

  evaluateBoardState(board: BoardState): number {
    return -Infinity;
  }

  basicNewMoveDistanceEvaluation(playerId: PlayerId, move: number[]): number {
    const goalIndex = goalDistances[playerId];
    const oldDistance = this.getDistanceToSpecificIndex(goalIndex, move[0]);
    const newDistance = this.getDistanceToSpecificIndex(
      goalIndex,
      move[move.length - 1]
    );

    return oldDistance - newDistance;
  }

  //TODO expects a valid move! Will not check illegal moves
  handleMove(board: BoardState, move: number[], undo?: boolean): BoardState {
    const oldIndex = undo ? move[move.length - 1] : move[0];
    const newIndex = undo ? move[0] : move[move.length - 1];
    for (const index of ['1', '2', '3', '4', '5', '6'] as const) {
      if (board[index].has(oldIndex)) {
        board[index].delete(oldIndex);
        board[index].add(newIndex);
        board['occupied'].delete(oldIndex);
        board['occupied'].add(newIndex);
        break;
      }
    }
    return board;
  }

  getValidMovesByBoardState(playerId: PlayerId) {
    //Get all values from board[key.toString() as keyof BoardState];
    //We can substitute the board[index] with the set().has(index) function !?
    //const moves = this.generateEligibleMovesById(null, playerId);

    const initBoard = this.initBoardByBoardState();

    let currentPlayerId = playerId;

    let moves: number[][] = [];
    let bestEvaluation: number = -1;
    let bestMove: number[] = [];

    let currentBoard = initBoard;

    if (!this.updateSubscription) {
      this.updateSubscription = interval(750).subscribe(() => {
        //loop over all requested playerIds

        for (const currentIndex of currentBoard[currentPlayerId]) {
          // loop over all marbles of requested playerId
          moves.push(
            ...this.generateEligibleMovesByIndex(currentBoard, currentIndex)
          );
        }

        bestEvaluation = -Infinity // pesky bug found: The best evaluation never gets reseted :(
        for(const move of moves){
          const evaluation = this.basicNewMoveDistanceEvaluation(playerId, move);

          if (evaluation > bestEvaluation) {
            bestEvaluation = evaluation;
            bestMove = move;
          }
        }

        moves = []
        currentPlayerId = ((currentPlayerId % 6) + 1) as PlayerId;

        currentBoard = this.handleMove(currentBoard, bestMove, false);

        this.boardStateSubject$.next(this.genDrawableBoard(currentBoard));

        this.simpleHash(this.genDrawableBoard(currentBoard))

        //currentBoard = this.handleMove(currentBoard, bestMove, true);

        //Add the move to the global move list => Use observables who call the function each 500ms!!!

      });
    }
  }

  startReactiveTest(): Observable<number[]> {
    return this.boardStateSubject$.asObservable();
  }

  stopUpdatingBoardState() {
    this.updateSubscription?.unsubscribe();
    this.updateSubscription = null;
  }
  genDrawableBoard(board?: BoardState): number[] {
    if (!board) {
      board = this.initBoardByBoardState();
    }

    let drawableBoard = Array.from({ length: 121 }, (_) => 0);

    for (const playerId of ['1', '2', '3', '4', '5', '6'] as const) {
      for (const index of board[playerId]) {
        drawableBoard[index] = Number(playerId);
      }
    }
    return drawableBoard;
  }

  simpleHash(numbers: number[]) : number{
    let hash = 0;
    for (let i = 0; i < numbers.length; i++) {
        hash = (hash * 31 + numbers[i]) % 121;
    }
    return hash;
}
}
