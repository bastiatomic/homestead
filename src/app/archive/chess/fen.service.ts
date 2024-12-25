import { Injectable } from '@angular/core';
import { Board } from './Board';

@Injectable({
  providedIn: 'root'
})
export class FenService {

  initFen(fen : string): Board {
    const splittedAttributes = fen.split(" ")

    let board: Board = 
    {pieces: [], pawnPromotionService: '', castling : {whiteKingSide: true, whiteQueenSide: true, blackKingSide: true, blackQueenSide: true}, activeColor: 'w'}
    board.pieces = Array.from({ length: 64 }, (_, i) => ({ fenIdentifier: '' }));

    let currentBoardIndex = 0;
    for (const char of splittedAttributes[0]) {

      if (char == '/') {
        continue;
      }
      if (Number.isInteger(Number(char))) {
        currentBoardIndex += Number(char);
        continue;
      }

      board.pieces[currentBoardIndex].fenIdentifier = char;
   

      currentBoardIndex += 1;
    }

    board.pieces.forEach((item) => {
      if (!item.fenIdentifier) {
        item.fenIdentifier = '';
      }
    });

    //active Color
    board.activeColor = splittedAttributes[1]

    //castling
    if(splittedAttributes[2] !== "-"){
      board.castling.blackKingSide = splittedAttributes[2].includes("k") 
      board.castling.blackQueenSide = splittedAttributes[2].includes("q") 
      board.castling.whiteKingSide = splittedAttributes[2].includes("K") 
      board.castling.whiteQueenSide = splittedAttributes[2].includes("Q") 
    }

    //FEN
    board.fen = fen;

    return board;
  }

}
