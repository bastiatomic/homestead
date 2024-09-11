import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SudokuSolverService {

  constructor() { }

  createNewBoard(): number[] {
    let array = Array.from({ length: 81 }, (_) =>
      0
    );

    return array;
  }

  solve(board: number[]){

  }
}
