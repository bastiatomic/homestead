import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { Board } from './Board';
import { FenService } from './fen.service';
import { LegalMovesService } from './legal-moves.service';
import { Mapping } from './Board';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Move } from './Move';

@Component({
  selector: 'app-chess',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatGridListModule, MatButtonModule,MatCardModule],
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
  flippedBlack: boolean = false;
  moves : Move[] = []

  ngOnInit() {
   //rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1
    this.board = this.fen.initFen("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"); // w KQkq - 0 1
  }

  selectPosition(index: number): void {

    if (this.firstMove == null && this.board.pieces[index].fenIdentifier) {
      this.firstMove = index;
      this.legalMoves = this.legalMovesService.getLegalMoves(this.board, this.firstMove)
    } else {
      this.secondMove = index;

      // || true removes move validation
      if(this.legalMoves.includes(this.secondMove) || true){
        this.moves.push( this.getFenByBoard() );
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
    return this.legalMoves.includes(index) ? "2px solid rgb(255, 138, 138)" : '';
  };

  getPositionColor(index: number): string {
    const row = Math.floor(index / 8);
    const col = index % 8;
    return (row + col) % 2 === 0
      ? 'rgb(181, 207, 183)'
      : 'rgb(188, 159, 139)'
  }

  flipBlack(){
    this.flippedBlack = !this.flippedBlack
  }

  changePositionManually(change : number){
    console.log(this.moves)
    const lastElIndex : number = this.moves.length -1;
    this.board = this.fen.initFen(this.moves[lastElIndex].fenString);
    this.moves.pop()
  }

  getFenByBoard(): Move{
    let fenString: string = '';
    let emptyCounter: number = 0;
    this.board.pieces.forEach((item, index)=>{

      if(item.fenIdentifier != ''){

        if(emptyCounter > 0){
          fenString += emptyCounter;
          emptyCounter = 0;
        }

        fenString += item.fenIdentifier
      }

      if(item.fenIdentifier == ''){
        emptyCounter+= 1

        if(emptyCounter == 8){
          fenString+= 8;
          emptyCounter = 0;
        }
      }

      if( (index+1)%8 == 0){
        fenString+= "/"
      }

    })
    fenString = fenString.slice(0, -1); 
    return {fenString: fenString}
  }

}
