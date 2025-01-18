import { Injectable } from '@angular/core';
import { Board } from './Board';
import { PUZZLES } from './puzzles';
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
    board.solutionPath = attributes[2].split(" ")
    board.rating = attributes[3]
    board.theme = attributes[7]
    console.log("PuzzleId,FEN,Moves,Rating,RatingDeviation,Popularity,NbPlays,Themes,GameUrl,OpeningTags")
    const chessRiddleObject = {
      fen: attributes[1],
      moves: attributes[2],
      rating: attributes[3],
      themes: attributes[7],
      url: attributes[8]
    }
    console.log(chessRiddleObject)
    return board
  }
}
