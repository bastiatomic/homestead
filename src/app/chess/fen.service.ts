import { Injectable } from '@angular/core';
import { Board } from './Board';
import { Mapping } from './Board';

@Injectable({
  providedIn: 'root'
})
export class FenService {

  constructor() { }

  initFen(fen : String, board:Board) {

    let currentBoardIndex = 0;
    for (const char of fen) {
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

    return board;
  }


}
