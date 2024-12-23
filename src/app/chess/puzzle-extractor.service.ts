import { Injectable } from '@angular/core';
import { Board } from './Board';
import { PUZZLES } from './Puzzles';
import { FenService } from './fen.service';

@Injectable({
  providedIn: 'root'
})
export class PuzzleExtractorService {

  constructor(private fenService: FenService) { }

  newRandom() : Board{
    
    const randomString = PUZZLES[Math.floor(Math.random()*PUZZLES.length)]
    const attributes : any[] = randomString.split(",") 
    let board : Board = this.fenService.initFen(attributes[1]);
    board.solutionPath = attributes[2]
    board.rating = attributes[3]
    return board
  }
}
