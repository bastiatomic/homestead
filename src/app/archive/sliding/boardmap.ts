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
  
  export interface BoardMap {
    [key: number] : number[];
  }
  
  // the index & direction will be applied without check to the startBoard
  export interface Move {
    index : number;
    direction : number;
  }