import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { SudokuSolverService } from './sudoku-solver.service';

@Component({
  selector: 'app-sudoku',
  standalone: true,
  imports: [CommonModule, MatGridListModule, MatButtonModule],
  templateUrl: './sudoku.component.html',
  styleUrl: './sudoku.component.scss',
})
export class SudokuComponent {
  constructor(private solverEngine: SudokuSolverService) {}

  board: number[] = [];
  WIDTH = 600;
  borderRight = [
    2, 11, 20, 29, 38, 47, 56, 65, 74, 5, 14, 23, 32, 41, 50, 59, 68, 77,
  ];
  numberSelector: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  selectedPosition: number | null = null;
  selectedNumber: number | null = null;

  ngOnInit() {
    this.newGame()
  }

  newGame(){
    this.board = this.solverEngine.createNewBoard();
  }

 

  getBorderStyle(i: number): { [key: string]: string } {
    let style: any = {};
    if ((i >= 18 && i <= 26) || (i >= 45 && i <= 53)) {
      style['border-bottom'] = '4px solid rgb(117, 164, 127)';
    }

    if ((i + 1) % 3 == 0) {
      if (this.borderRight.includes(i)) {
        style['border-right'] = '4px solid rgb(117, 164, 127)';
      }
    }

    return style;
  }

  selectPosition(i: number) {
    this.selectedPosition = i;
  }
  
  selectNumber(i: number) {
    this.selectedNumber = i;
    this.board[this.selectedPosition!] = i;
    this.selectedPosition = null;
    this.selectedNumber = null;
    //this.solverEngine.solve(this.selectedPosition, i)
  }
}
