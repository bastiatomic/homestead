import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { SudokuSolverService } from './sudoku-solver.service';
import { Position } from './Position';
import { Difficulty } from './Difficulty';
import { FirestoreService } from '../../firestore.service';

@Component({
  selector: 'app-sudoku',
  standalone: true,
  imports: [CommonModule, MatGridListModule, MatButtonModule],
  templateUrl: './sudoku.component.html',
  styleUrl: './sudoku.component.scss',
})
export class SudokuComponent {

  constructor(private solverEngine: SudokuSolverService, private firebaseService: FirestoreService) {}

// Initialize Cloud Firestore and get a reference to the service
  email = "bastianh.1709@gmail.com";
  password = '000000';

  ngOnInit(){
   // this.signIn()
   // this.getDocument('sudoku', 'bastiatomic')
   this.newGame('medium');
  }

  signIn() {
    this.firebaseService.signIn(this.email, this.password);
  }

  async saveDocument() {
   this.firebaseService.saveDocument({board: this.board})
  }

  async getDocument(collection: string, document: string){
    const doc = await this.firebaseService.getDocument(collection, document);
    this.board = doc.board;
    //TODO: WHERE IS THE SOLVED BOARD !?
  }

  board: Position[] = [];
  solvedBoard: Position[] = [];
  WIDTH = 600;
  borderRight = [
    2, 11, 20, 29, 38, 47, 56, 65, 74, 5, 14, 23, 32, 41, 50, 59, 68, 77,
  ];
  numberSelector1: number[] = [1, 2, 3, 4, 5];
  numberSelector2 : number[] = [6, 7, 8, 9, 0];
  selectedPosition: number | null = null;
  selectedNumber: number | null = null;
  gameNotStarted = true;
  difficulties : string[] = Object.keys(Difficulty)

  newGame(difficulty: string) {

    this.solvedBoard = this.solverEngine.createNewBoard();
    
    this.board = this.solverEngine.addDifficulty(
      JSON.parse(JSON.stringify(this.solvedBoard)),
      difficulty
    );

    this.gameNotStarted = false;
  }

  reset() {
    this.board = this.solverEngine.createNewBoard();
    this.gameNotStarted = true;
  }

  verify() {
    for (let i = 0; i < this.solvedBoard.length; i++) {
      if (this.board[i].value !== this.solvedBoard[i].value) {
        window.alert('WRONG');
        return;
      }
    }
    window.alert('CORRECT');
  }

  selectPosition(i: number) {

    if(!this.board[i].isFixed){
      this.selectedPosition = i;
    } else{
      this.selectedPosition = null;
    }
    
  }

  selectNumber(i: number) {
    this.selectedNumber = i;
    this.board[this.selectedPosition!].value = i;
    this.selectedNumber = null;
  }

  getBorderStyle(i: number): { [key: string]: string } {
    let style: any = {};
    if ((i >= 18 && i <= 26) || (i >= 45 && i <= 53)) {
      style['border-bottom'] = '2px solid rgb(117, 164, 127)';
    }

    if ((i + 1) % 3 == 0) {
      if (this.borderRight.includes(i)) {
        style['border-right'] = '2px solid rgb(117, 164, 127)';
      }
    }

    if(false && this.board[i].isFixed){
      style['background-color'] = 'rgba(20,20,20,0.9)'
    }

    return style;
  }
}
