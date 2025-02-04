import { Injectable } from '@angular/core';
import { Board } from './Board';
import { PUZZLES } from './puzzles';
import { FenService } from './fen.service';

@Injectable({
  providedIn: 'root'
})
export class PuzzleExtractorService {

  constructor(private fenService: FenService) { }

  newRandom(): Board {

    const randomRiddleString = PUZZLES[Math.floor(Math.random() * PUZZLES.length)]
    const attributes: any[] = randomRiddleString.split(",")
    let board: Board = this.fenService.initFen(attributes[1]);
    board.solutionPath = attributes[2].split(" ")
    board.rating = attributes[3];
    board.theme = attributes[7].split(" ");
    return board;
  }
}
