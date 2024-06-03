import { Component } from '@angular/core';
import { ChessEngineService } from '../chess-engine.service';
import {MatGridListModule} from '@angular/material/grid-list'
import { CommonModule } from "@angular/common";
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { Chessboard } from '../chess-board';
import { mappingPiecesScheme } from '../mapping-pieces.constant';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CommonModule,MatGridListModule, MatCardModule,MatButtonModule,MatDividerModule,MatIcon,MatListModule],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss'
})
export class BoardComponent {

  constructor(private chessEngine : ChessEngineService){}

  board : Chessboard = {
    grid: []
  }

  firstPiece : number | null = null;
  secondPiece : number | null = null;

  ngOnInit(){
    console.log("Booting up chess")

    this.board.grid = this.chessEngine.fenToBoard("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR")

  }

  collectClick(i: number){

    if(!this.firstPiece){
      this.firstPiece = i;
    } else{
      this.secondPiece = i;

      if(this.firstPiece != this.secondPiece){
        this.board.grid = this.chessEngine.makeMove(this.firstPiece, this.secondPiece, this.board.grid)
      }

      this.firstPiece = null; this.secondPiece = null;
    }

  }

  getSquareStyle(index : number) : boolean{
    return (Math.floor(index/8)+index%8)%2 != 0;
  }

}
