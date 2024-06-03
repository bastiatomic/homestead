export interface Board {
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
