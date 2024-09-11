import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { Board } from './Board';
import { FenService } from './fen.service';
import { LegalMovesService } from './legal-moves.service';
import { Mapping } from './Board';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-chess',
  standalone: true,
  imports: [CommonModule, MatGridListModule, MatButtonModule,MatCardModule],
  templateUrl: './chess.component.html',
  styleUrl: './chess.component.scss',
})
export class ChessComponent {

  constructor (private fen : FenService, private legalMovesService : LegalMovesService){}
  board: Board = {pieces: []}
  firstMove: any = null;
  secondMove: any = null;
  Mapping : { [key: string]: string }= Mapping;
  legalMoves : number[] = []

  ngOnInit() {
    this.board.pieces = Array.from({ length: 64 }, (_, i) => ({ index: i, fenIdentifier: '' }));
   //rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1
    this.board = this.fen.initFen("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR", this.board); // w KQkq - 0 1
  }

  selectPosition(index: number): void {

    if (this.firstMove == null && this.board.pieces[index].fenIdentifier) {
      this.firstMove = index;
      this.legalMoves = this.legalMovesService.getLegalMoves(this.board, this.firstMove)
    } else {
      this.secondMove = index;
      console.log(this.firstMove, this.secondMove);

      if(this.legalMoves.includes(this.secondMove)){
        this.board = this.legalMovesService.getNewBoardState(this.board, this.firstMove, this.secondMove);
      } else {
        console.log("ILLEGAL MOVE")
      }

      this.firstMove = null;
      this.secondMove = null;
      this.legalMoves = [];
      
    }
  }
  getBorderColor(index: number): string{
    if(this.legalMoves.includes(index)){
      return "3px solid red"
    }
    return ""
  };

  getPositionColor(index: number): string {
    const row = Math.floor(index / 8);
    const col = index % 8;
    return (row + col) % 2 === 0
      ? 'rgb(181, 207, 183)'
      : 'rgb(188, 159, 139)'
  }
  getRowColumn(i: number): string {
    const column = i % 8;
    const row = Math.floor(i / 8);
    return i+" "+row+","+column
  }
}
