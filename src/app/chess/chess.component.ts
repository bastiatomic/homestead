import { Component } from '@angular/core';
import { Piece } from './Piece';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { Colors } from './Colors';
import { Mapping } from './Piece';

@Component({
  selector: 'app-chess',
  standalone: true,
  imports: [CommonModule, MatGridListModule, MatButtonModule],
  templateUrl: './chess.component.html',
  styleUrl: './chess.component.scss'
})
export class ChessComponent {

  board : Piece[] = []
  initFenString : String = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR';
  firstMove : any = null; secondMove : any = null;

  ngOnInit(){
    this.board = Array.from({ length: 64 }, (_, i) => ({index: i}));
    this.fenToBoard()
  }

  selectPosition(index: number): void{

    if(!this.firstMove){
      this.firstMove = this.board[index].index
    } else {
      this.secondMove = this.board[index].index
      console.log(this.firstMove, this.secondMove)
      this.firstMove = null; this.secondMove = null;
    }

  }

  fenToBoard(){
    const fen : String = this.initFenString;

    let currentBoardIndex = 0;
    for (const char of fen) {

      if(char == "/"){continue}
      if(char == "8"){currentBoardIndex += 8; continue}

      this.board[currentBoardIndex].fenIdentifier = char
      this.board[currentBoardIndex].icon = "assets/chess/"+Mapping[char]+".png"
      this.board[currentBoardIndex].name = Mapping[char]
      
      currentBoardIndex+=1;

    }

    this.board.forEach((item)=> {
      if(!item.fenIdentifier){
        item.fenIdentifier = "-"
        item.name = "empty_tile"
      }
    })
  }

  getPositionColor(index: number): string {
    const row = Math.floor(index / 8);
    const col = index % 8;
    return (row + col) % 2 === 0 ? "assets/legacy_assets/empty_tile_green_64x.png" :  "assets/legacy_assets/empty_tile_yellow_64x.png";
  }

}
