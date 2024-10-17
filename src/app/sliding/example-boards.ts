export const DEFAULT_GRID: SlidingBoard = {
    boardMap: {
      0: [11, 12, 22, 23, 29, 30, 38],
      1: [3],
      2: [8, 15],
      3: [9, 10, 16, 17],
      4: [18, 19],
      5: [24, 25, 31, 32],
      6: [26],
      7: [33],
      9: [0, 1, 2, 4, 5, 6, 7, 13, 14, 20, 21, 27, 28, 34, 35, 36, 37, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48],
    },
    width: 7,
    height: 7,
    victoryId: 1,
    victoryIndex: 38,
    hash:0,
    parentNodeHash: 0,
    movesMade:0,
    name: "[CV058] Get the Ball Out! 1",
    img: "assets/Tallneck-Icon.png"
  };

export interface SlidingBoard{
  boardMap: {[key: number]: number[]}
  width: number;
  height: number;
  victoryId: number;
  victoryIndex: number;
  hash: number;
  parentNodeHash: number;
  movesMade: number;
  name: String;
  img: String;

}