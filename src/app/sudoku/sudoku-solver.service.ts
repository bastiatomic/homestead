import { Injectable } from '@angular/core';
import { neighborMapping } from './NeighborMapping';
import { Position } from './Position';
import { Difficulty } from './Difficulty';

@Injectable({
  providedIn: 'root',
})
export class SudokuSolverService {
  constructor() {}

  createNewBoard(): Position[] {
    //creating the pattern (9^9)^3 possibilites, thats a lot. Trust me.
    const SIZE = 9;
    let nums: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8].sort(
      () => Math.random() - 0.5
    );
    let rows: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8].sort(
      () => Math.random() - 0.5
    );
    let cols: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8].sort(
      () => Math.random() - 0.5
    );

    let board_1D: Position[] = Array.from({ length: 81 }, () => ({
      value: 0,
      isFixed: true,
    }));

    //Magic Pattern Creator
    for (let index = 0; index < board_1D.length; index++) {
      board_1D[index].value =
        nums[
          (3 * (Math.floor(index / 9) % 3) +
            Math.floor(Math.floor(index / 9) / 3) +
            (index % 9)) %
            SIZE
        ] + 1; //+1 to mitigate "use number as index"
    }

    return board_1D;
  }

  addDifficulty(board: Position[], difficulty: string): Position[] {
    const numbersToBeStripped: number = Difficulty[difficulty];

    for (let i = 0; i < numbersToBeStripped; i++) {
      const randomIndex: number = Math.floor(Math.random() * board.length);
      board[randomIndex].value = 0;
      board[randomIndex].isFixed = false;
    }

    return board;
  }

  verifyIntegrity(board: Position[]) {
    for (let i = 0; i < board.length; i++) {
      const item: number = board[i].value;
      for (const neighbor of neighborMapping[i]) {
        if (board[neighbor].value == item) {
          return false;
        }
      }
    }
    return true;
  }
}
