import { Injectable } from '@angular/core';
import { SlidingBoard2 } from './boardmap';

@Injectable({
  providedIn: 'root',
})
export class BoardGeneratorService {
  //given n and m, generate a random board

  newBoard(): SlidingBoard2 {
    let board: SlidingBoard2 = {
      board: Array.from({ length: 7 }, () =>
        Array.from({ length: 7 }, (_) => 0)
      ),
      lookupTable: {},
      victoryIndex: [],
      name: 'pendingName',
    };

    /*  b
    Todo: Create a list of all 2x2 possibilites, L shapes, crosses (and reversed / mirrored)
    Idea: Place them randomly on the board until only n empty fields are left.
    Start node left. End note right.
    Todo: Create a mapping function to determine what nodes can be places where 
        dynamically as nodes get placed (heat map?)
    */

    return board;
  }
}
