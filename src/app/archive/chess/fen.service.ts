import { Injectable } from '@angular/core';
import { Board } from './Board';
import { Mapping } from './Board';
import { Move } from './Move';

@Injectable({
  providedIn: 'root'
})
export class FenService {

  initFen(fen : String): Board {

    let board: Board = {pieces: []}
    board.pieces = Array.from({ length: 64 }, (_, i) => ({ index: i, fenIdentifier: '' }));

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

  boardToFen(board: Board) : Move {

    return {fenString: ''}
  }


}
