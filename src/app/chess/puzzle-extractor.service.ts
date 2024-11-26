import { Injectable } from '@angular/core';
import { Board } from './Board';
import { PUZZLES } from './Puzzles';

@Injectable({
  providedIn: 'root'
})
export class PuzzleExtractorService {

  constructor() { }

  puzzleToBoard(puzzleString: string) : Board | false{

    console.log(puzzleString)
    return false
  }

  newRandom() : string {
    const randomString = PUZZLES[Math.floor(Math.random()*PUZZLES.length)]
    const attributes : any[] = randomString.split(" ") 
    return attributes.slice(1,7).join(" ")
  }
}
