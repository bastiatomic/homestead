import { BoardMap } from "./BoardMap";

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

export const DB118: SlidingBoard = {
  boardMap: {
    '0': [
      25, 26, 27, 28,
      29, 30, 33, 38
    ],
    '1': [ 11, 12, 19, 20 ],
    '2': [ 34, 35, 43 ],
    '3': [ 36, 37, 44 ],
    '4': [ 42, 50, 51 ],
    '5': [ 45, 52, 53 ],
    '6': [ 59, 60 ],
    '9': [
       0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10,
      13, 14, 15, 16, 17, 18, 21, 22, 23, 24, 31,
      32, 39, 40, 41, 46, 47, 48, 49, 54, 55, 56,
      57, 58, 61, 62, 63, 64, 65, 66, 67, 68, 69,
      70, 71
    ]
  },
  width: 8,
  height: 8,
  victoryId: 1,
  victoryIndex: 60,
  name: 'DB118',
  img: 'null'
}

export interface SlidingBoard{
  boardMap: BoardMap
  width: number;
  height: number;
  victoryId: number;
  victoryIndex: number;
  hash?: number;
  parentNodeHash?: number;
  movesMade?: number;
  name: String;
  img: String;

}