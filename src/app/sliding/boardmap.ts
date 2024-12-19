export interface SlidingBoard {
    boardMap: BoardMap;
    victoryId: 1;
    victoryIndex: number;
    name?: string;
    img?: string;
    hash?: number;
    parentNodeHash?: number;
    movesMade?: number;
    dimension: number
  }
 export interface SlidingBoard2{
  board: number[][]; // list of lists
  lookupTable: {[key: number] : number[][]}; // list of all
  victoryIndex: number[] // y,x coordinates
 }
  
export interface BoardMap {
  [key: number] : number[];
}

// the index & direction will be applied without check to the startBoard
export interface Move {
  index : number;
  direction : number;
}
export interface Board_Legacy {
  board: number[];
  width: number;
  height: number;
  victoryId: number;
  victoryIndex: number;
  hash: number;
  parentNodeHash:  number;
  movesMade: number;
  name?: string;
  img?: string
}

export interface Hash2SlidingBoard{
  [key : number] : SlidingBoard2
}