import { Injectable } from '@angular/core';
import { jumpIndice } from './JumpIndice';
import { basicBoardSetup } from './BasicBoardSetup';
import { indexToString } from './IndexToString';
import { distanceToTargets, goalDistances } from './Interfaces';
import { BehaviorSubject, Observable, Subscription, interval } from 'rxjs';
import {
  BoardType,
  initialBoard,
  onePlayerBoard,
  twoPlayerBoard,
} from './BoardStates';

@Injectable({
  providedIn: 'root',
})
export class MoveGeneratorService {
  private boardStateSubject$ = new BehaviorSubject<BoardType>({});
  private updateSubscription: Subscription | null = null;

  constructor() {}

  generateEligibleMovesByIndex(
    board: BoardType,
    startIndex: number
  ): number[][] {
    const finalBasicMoves: number[][] = basicBoardSetup[startIndex].neighbors
      .filter((neighbor) => !board['occupied'].has(neighbor))
      .map((neighbor) => [startIndex, neighbor]);

    let jumpTraversalPaths: number[][] = [];

    //TODO: KILL ME (duplicate) AND JUST START WITH AN EMPTY LIST
    jumpIndice[startIndex].forEach((jumpIndex) => {
      if (
        board['occupied'].has(jumpIndex.neighbor) &&
        !board['occupied'].has(jumpIndex.targetLocation)
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
          board['occupied'].has(jumpIndex.neighbor) &&
          !board['occupied'].has(jumpIndex.targetLocation) &&
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

  getDistanceToSpecificIndexXXX(startIndex: number, endIndex: number): number {
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

  basicNewMoveDistanceEvaluation(playerId: number, move: number[]): number {
    const targetIndexForPlayerId = goalDistances[playerId];

    return (
      distanceToTargets[targetIndexForPlayerId][move[0]] -
      distanceToTargets[targetIndexForPlayerId][move[move.length - 1]]
    );
  }

  handleMove2(move: number[]) {
    const board = this.boardStateSubject$.getValue()

    this.boardStateSubject$.next(this.handleMove(board, move))
  }

  //TODO expects a valid move! Will not check illegal moves
  handleMove(board: BoardType, move: number[], undo?: boolean): BoardType {
    const oldIndex = undo ? move[move.length - 1] : move[0];
    const newIndex = undo ? move[0] : move[move.length - 1];

    const allPlayerIds: string[] = Object.keys(board).filter(
      (item) => item !== 'occupied'
    );

    for (const index of allPlayerIds) {
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

  getValidMovesByBoardState() {
    //Get all values from board[key.toString() as keyof BoardState];
    //We can substitute the board[index] with the set().has(index) function !?
    //const moves = this.generateEligibleMovesById(null, playerId);

    let moves: number[][] = [];
    let bestEvaluation: number = -1;
    let bestMove: number[] = [];

    let currentBoard = initialBoard;
    const allPlayerIds: string[] = Object.keys(currentBoard).filter(
      (item) => item !== 'occupied'
    );
    let currentAllPlayerIdsIndex: number = 0;

    if (!this.updateSubscription) {
      this.updateSubscription = interval(150).subscribe(() => {
        //loop over all requested playerIds
        for (const currentIndex of currentBoard[
          allPlayerIds[currentAllPlayerIdsIndex]
        ]) {
          // loop over all marbles of requested playerId

          moves.push(
            ...this.generateEligibleMovesByIndex(currentBoard, currentIndex)
          );
        }

        bestEvaluation = -Infinity; // pesky bug found: The best evaluation never gets reseted :(
        for (const move of moves) {
          const evaluation = this.basicNewMoveDistanceEvaluation(
            Number(allPlayerIds[currentAllPlayerIdsIndex]),
            move
          );

          if (evaluation > bestEvaluation) {
            bestEvaluation = evaluation;
            bestMove = move;
          }
        }

        moves = [];
        currentAllPlayerIdsIndex =
          (currentAllPlayerIdsIndex + 1) % allPlayerIds.length;

        currentBoard = this.handleMove(currentBoard, bestMove, false);


        this.boardStateSubject$.next(currentBoard);

        this.simpleHash(this.genDrawableBoard(currentBoard));

        //currentBoard = this.handleMove(currentBoard, bestMove, true);

        //Add the move to the global move list => Use observables who call the function each 500ms!!!
      });
    }
  }

  startReactiveTest(): Observable<BoardType> {
    return this.boardStateSubject$.asObservable();
  }

  stopUpdatingBoardState() {
    this.updateSubscription?.unsubscribe();
    this.updateSubscription = null;
  }
  genDrawableBoard(board?: BoardType): number[] {
    if (!board) {
      board = initialBoard;
    }

    let drawableBoard = Array.from({ length: 121 }, (_) => 0);

    const allPlayerIds: string[] = Object.keys(board).filter(
      (item) => item !== 'occupied'
    );

    for (const playerId of allPlayerIds) {
      for (const index of board[playerId]) {
        drawableBoard[index] = Number(playerId);
      }
    }
    return drawableBoard;
  }

  mapListToSet(a: number[]): BoardType {
    let newBoardType: BoardType = {};
    newBoardType['occupied'] = new Set();

    a.forEach((item, index) => {
      if (item >= 1 && item <= 6) {
        newBoardType[item]
          ? newBoardType[item].add(index)
          : (newBoardType[item] = new Set([index]));

        newBoardType['occupied'].add(index);
      }
    });
    return newBoardType;
  }

  simpleHash(numbers: number[]): number {
    let hash = 0;
    for (let i = 0; i < numbers.length; i++) {
      hash = (hash * 31 + numbers[i]) % 121;
    }
    return hash;
  }
}
