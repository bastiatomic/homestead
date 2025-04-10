import { Injectable } from '@angular/core';
import { jumpIndice } from './JumpIndice';
import { basicBoardSetup } from './BasicBoardSetup';
import {
  BoardEvaluation,
  distanceToTargets,
  goalDistances,
  zobristTable,
} from './Interfaces';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { BoardType, twoPlayerBoard } from './BoardStates';

@Injectable({
  providedIn: 'root',
})
export class MoveGeneratorService {
  boardStateSubject$ = new BehaviorSubject<BoardType>(twoPlayerBoard);
  private updateSubscription: Subscription | null = null;
  continueWorkflow$ = new BehaviorSubject<boolean>(true);
  private boardEvaluationCounter = 0;
  private transpositionCounter = 0;

  private transpositionTable: { [key: string]: number[] } = {};

  private boardList: BoardType[] = [];

  getPossibleMovesByIndex(board: BoardType, startIndex: number): number[][] {
    const basicMoves: number[][] = basicBoardSetup[startIndex].neighbors
      .filter((neighbor) => !board['occupied'].has(neighbor))
      .map((neighbor) => [startIndex, neighbor]);

    let moves = new Set<number>();
    let queue = [startIndex];

    while (queue.length > 0) {
      const currentIndex = queue.shift()!;

      for (const { neighbor, targetLocation } of jumpIndice[currentIndex]) {
        if (
          board['occupied'].has(neighbor) &&
          !board['occupied'].has(targetLocation) &&
          !moves.has(targetLocation)
        ) {
          moves.add(targetLocation);
          queue.push(targetLocation);
        }
      }
    }

    return [...moves]
      .map((neighbor) => [startIndex, neighbor])
      .concat(basicMoves);
  }

  handleMove(board: BoardType, move: number[], undo?: boolean) {
    //OUTDATED!! Uses return board AND $.next()
    const oldIndex = undo ? move[move.length - 1] : move[0];
    const newIndex = undo ? move[0] : move[move.length - 1];

    const allPlayerIds: string[] = Object.keys(board).filter(
      (item) => item !== 'occupied'
    );

    for (const playerId of allPlayerIds) {
      if (board[playerId].has(oldIndex)) {
        // Ensure the new index isn't already occupied
        if (!board['occupied'].has(newIndex)) {
          board[playerId].delete(oldIndex);
          board[playerId].add(newIndex);
          board['occupied'].delete(oldIndex);
          board['occupied'].add(newIndex);
        } else {
          return board; //ERROR return invalid move, should never occur
        }
        break;
      }
    }
    return board;
  }
  handleMove2(move: number[]): void {
    const board = this.boardStateSubject$.getValue();

    const oldIndex = move[0];
    const newIndex = move[move.length - 1];

    const allPlayerIds: string[] = Object.keys(board).filter(
      (item) => item !== 'occupied'
    );

    for (const playerId of allPlayerIds) {
      if (board[playerId].has(oldIndex)) {
        // Ensure the new index isn't already occupied
        if (!board['occupied'].has(newIndex)) {
          board[playerId].delete(oldIndex);
          board[playerId].add(newIndex);
          board['occupied'].delete(oldIndex);
          board['occupied'].add(newIndex);
        } else {
          //error
        }
        this.boardStateSubject$.next(board);
        break;
      }
    }

    //find index in playerIds.
    //update them
  }

  startReactiveTest(a?: BoardType): Observable<BoardType> {
    if (a) {
      this.boardStateSubject$.next(a);
    }
    return this.boardStateSubject$.asObservable();
  }

  setNewBoard(a: BoardType): Observable<BoardType> {
    this.boardStateSubject$.next(a);
    return this.boardStateSubject$;
  }

  stopUpdatingBoardState() {
    this.updateSubscription?.unsubscribe();
    this.updateSubscription = null;
  }

  getAllMovesByPlayer(board?: BoardType, playerId?: number): number[][] {
    if (!board) {
      board = this.boardStateSubject$.getValue();
    }
    if (!playerId) {
      playerId = 0;
    }

    const allPlayerIndice: Set<number> = board[playerId];
    let moves: number[][] = [];

    for (const move of allPlayerIndice) {
      moves.push(...this.getPossibleMovesByIndex(board, move));
    }
    return moves;
  }

  getRandomBoard(playerAmount: number) {
    let emptyBoard: BoardType = {};

    emptyBoard['occupied'] = new Set<number>();
    for (let i = 0; i < playerAmount; i++) {
      emptyBoard[i] = new Set<number>();
    }

    const numbers = new Set<number>();
    const count = playerAmount * 10;
    while (numbers.size < count) {
      numbers.add(Math.floor(Math.random() * 120));
    }

    const numbers2: number[] = [...numbers];

    numbers2.forEach((item, index) => {
      const playerId = index % playerAmount;
      emptyBoard[playerId].add(item);
      emptyBoard['occupied'].add(item);
    });

    this.boardStateSubject$.next(emptyBoard);
    return emptyBoard;
  }

  gameOver(): boolean {
    //TODO: Check for now only if a marble is at the 'goalDistances'
    //TODO: Check first above condition and then evaluate an entire player => performance
    return false;
  }

  /** get distance of each marble to goalIndex => sum => smaller is better => 1000-value => larger is better */
  evaluateBoard(board: BoardType, playerId: number): number {
    const zobristHash: string = this.getZobristHash(board).toString();

    if (this.transpositionTable[zobristHash]) {
      this.transpositionCounter++;
      return this.transpositionTable[zobristHash][0]; //return evaluation for playerid
    }

    const allMarbleLocations = board[playerId];
    this.boardEvaluationCounter++;

    let sumOfDistances = 0;
    for (const marbleIndex of allMarbleLocations) {
      sumOfDistances += distanceToTargets[goalDistances[playerId]][marbleIndex];
    }
    const evaluation = 1000 - sumOfDistances;
    this.transpositionTable[zobristHash] = [evaluation];
    this.boardList.push(structuredClone(board));
    return evaluation;
  }

  getZobristHash(board: BoardType): bigint {
    let finalHash = 0n;
    // Sort keys (excluding 'occupied') to guarantee a consistent order.
    const keys = Object.keys(board)
      .filter((key) => key !== 'occupied')
      .sort((a, b) => parseInt(a) - parseInt(b));

    for (const key of keys) {
      let hash = 0n;
      const sortedPositions = Array.from(board[key]).sort((a, b) => a - b);
      sortedPositions.forEach((position) => {
        hash ^= zobristTable[position];
      });
      finalHash ^= hash;
    }
    return finalHash;
  }

  // The paranoid recursive search function with alpha-beta pruning.
  // "maximizingPlayer" is the one we want to optimize for.
  // "currentPlayer" is the player whose turn it is in the current recursion.
  // BUG!!! still searches millions of boards per iteration
  paranoidMoveSearch(
    board: { [key: string]: Set<number> },
    depth: number,
    currentPlayer: number,
    maximizingPlayer: number,
    maxPlayerAmount: number,
    alpha: number,
    beta: number
  ): { evaluation: number; move: any } {
    // Termination: when depth is 0 or there are no moves, return board evaluation.
    if (depth === 0 || this.gameOver()) {
      return {
        evaluation: this.evaluateBoard(board, maximizingPlayer),
        move: null,
      };
    }

    //TODO if a player cant move, we skip them. Account for: No one can move: Edge case, can be neglected?
    const moves = this.getAllMovesByPlayer(board, currentPlayer);
    if (moves.length === 0) {
      return {
        evaluation: this.evaluateBoard(board, maximizingPlayer),
        move: null,
      };
    }

    let bestMove = null;
    // When it is the turn of the maximizing player, we want to choose the move with the highest evaluation.
    //TODO: Modify: Everyone is trying to maximize to save the if condition
    if (currentPlayer === maximizingPlayer) {
      let value = -Infinity;
      for (const move of moves) {
        const newBoard = this.handleMove(board, move);
        const nextPlayer = (currentPlayer + 1) % maxPlayerAmount;
        const result = this.paranoidMoveSearch(
          structuredClone(newBoard),
          depth - 1,
          nextPlayer,
          maximizingPlayer,
          maxPlayerAmount,
          alpha,
          beta
        );
        if (result.evaluation > value) {
          value = result.evaluation;
          bestMove = move;
        }
        alpha = Math.max(alpha, value);
        if (alpha >= beta) {
          // Beta cutoff.
          break;
        }
      }
      return { evaluation: value, move: bestMove };
    } else {
      // For every opponent move, we assume they cooperate to minimize our evaluation.
      let value = Infinity;
      for (const move of moves) {
        const newBoard = this.handleMove(board, move);
        const nextPlayer = (currentPlayer + 1) % maxPlayerAmount;
        const result = this.paranoidMoveSearch(
          structuredClone(newBoard),
          depth - 1,
          nextPlayer,
          maximizingPlayer,
          maxPlayerAmount,
          alpha,
          beta
        );
        if (result.evaluation < value) {
          value = result.evaluation;
          bestMove = move;
        }
        beta = Math.min(beta, value);
        if (beta <= alpha) {
          // Alpha cutoff.
          break;
        }
      }
      return { evaluation: value, move: bestMove };
    }
  }

  recursiveApplyingBestMove(
    currentPlayer: number,
    maxPlayerCount: number,
    max_turns: number,
    search_depth: number,
    turnCounter: number
  ) {
    if (max_turns <= 0) {
      return;
    }

    setTimeout(() => {
      if (!this.continueWorkflow$.getValue()) {
        return;
      }
      const startTime = performance.now();
      const board: BoardType = this.boardStateSubject$.getValue();

      //select next player
      const response = this.paranoidMoveSearch(
        structuredClone(board),
        search_depth,
        currentPlayer,
        currentPlayer,
        maxPlayerCount,
        -Infinity,
        Infinity
      );

      if (response.move) {
        const newBoard = this.handleMove(structuredClone(board), response.move);

        this.boardStateSubject$.next(newBoard);
      } else {
        console.log('Error in fetching valid best move');
      }
      const endTime = performance.now();

      const time = ((endTime - startTime) / 1_000).toFixed(4);
      console.log(
        '[' + turnCounter + ']',
        time,
        's | evaluated:',
        this.boardEvaluationCounter,
        '| transpositions used:',
        this.transpositionCounter
      );
      //console.log(this.boardStateSubject$.getValue())

      currentPlayer = (currentPlayer + 1) % maxPlayerCount;
      this.boardEvaluationCounter = 0;
      this.transpositionCounter = 0;
      this.recursiveApplyingBestMove(
        currentPlayer,
        maxPlayerCount,
        max_turns - 1,
        search_depth,
        turnCounter + 1
      );
    }, 200);
  }

  getBestMoveByPlayerId(): void {
    //TODO: Sth is definetly wrong, when maxTurn=2 results in a player having moved multiple times
    const maxTurns = 10;
    const ALGORITHM_SEARCH_DEPTH = 6; // Appears to work somehow already
    let currentPlayer = 0;
    const maxPlayerCount =
      Object.keys(this.boardStateSubject$.getValue()).length - 1;

    this.recursiveApplyingBestMove(
      currentPlayer,
      maxPlayerCount,
      maxTurns,
      ALGORITHM_SEARCH_DEPTH,
      0
    );
  }

  recursivelyCallBoards(depth: number) {
    if (depth == 0) {
      return;
    }
    setTimeout(() => {
      console.log(depth);
      this.boardStateSubject$.next(this.boardList[depth]);
      this.recursivelyCallBoards(depth - 1);
    }, 500);
  }
}
