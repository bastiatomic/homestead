import { Injectable } from '@angular/core';
import { Board } from './Board';

@Injectable({
  providedIn: 'root'
})
export class FenService {

  initFen(fen : string): Board {
    console.log(fen)
    const splittedAttributes = fen.split(" ")

    let board: Board = {pieces: [], pawnPromotionService: ''}
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

    board.activeColor = splittedAttributes[1]


    board.pieces.forEach((item) => {
      if (!item.fenIdentifier) {
        item.fenIdentifier = '';
      }
    });

    return board;
  }

}
