import { SlidingBoard, SlidingBoard2 } from './boardmap';

export const TESTING_BOARD: SlidingBoard = {
  boardMap: {
    0: [9, 10, 18,19,24,25,32,20,21,26,27,8, 7, 13,15,6, 12,16,22,28],
    1: [2],
    5: [19,20,21,14,26],
  },
  dimension: 6,
  victoryId: 1,
  victoryIndex: 10,
  hash: 0,
  parentNodeHash: 0,
  movesMade: 0,
  name: "[CV058] Get the Ball Out! 1",
  img: "assets/Tallneck-Icon.png",
};

export const DEFAULT_GRID: SlidingBoard = {
  boardMap: {
    0: [9, 10, 18,19,24,25,32,20,21,26,27],
    1: [2],
    8: [28],
    7: [6, 12],
    3: [8, 7, 14, 13],
    4: [15, 16],
    5: [20,21,26,27],
    6: [22],
  },
  dimension: 6,
  victoryId: 1,
  victoryIndex: 32,
  hash: 0,
  parentNodeHash: 0,
  movesMade: 0,
  name: "[CV058] Get the Ball Out! 1",
  img: "assets/Tallneck-Icon.png",
};

export const DB118: SlidingBoard = {
  boardMap: {
    0: [17, 18, 19, 20, 21, 22, 25, 30, 59, 60],
    1: [3, 4, 11, 12],
    2: [59, 60],
    3: [28, 29, 36],
    4: [34, 42, 43],
    5: [37, 44, 45],
    6: [51, 52],
    7: [26, 27, 35],
},
  dimension: 8,
  victoryId: 1,
  victoryIndex: 60,
  name: "DB118",
  img: undefined,
};

export const SLIDING_STONES: SlidingBoard = {
  boardMap: {
    0: [25, 26, 27, 28, 31, 32, 33, 34],
    2: [33],
    1: [8, 9, 14, 15],
    6: [21, 22, 16],
    3: [13, 19, 20],
    4: [3, 4, 10],
    5: [1, 2, 7],
  },
  
  dimension: 6,
  victoryId: 1,
  victoryIndex: 5,
  name: "sliding stones",
};

export const V4_GET_BALL_OUT: SlidingBoard2 = {
  board: [
    [  -1, -1, 1, -1, -1,],
    [  7, 3, 3, 0, 0, ],
    [  7, 3, 3, 4, 4, ],
    [  0, 0, 5, 5, 6, ],
    [  0, 0, 5, 5, 8, ],
    [  -1, -1, 0, -1,  -1 ]
  ],
  lookupTable : {},
  victoryIndex: [ 5, 3 ],
  name: 'get the ball out'
};

export const V4_DIABOLICAL_BOX : SlidingBoard2 = {
  board: [
    [
      -1, -1, -1, -1,
      -1, -1, -1, -1,
      -1, -1
    ],
    [
      -1, -1, -1, 1,
      1, -1, -1, -1,
      -1, -1
    ],
    [
      -1, -1, -1, 1,
      1, -1, -1, -1,
      -1, -1
    ],
    [
      -1, -1, 2, 0,
      0, 3, 0, -1,
      -1, -1
    ],
    [
      -1, 2, 2, 2,
      0, 3, 3, -1,
      -1, -1
    ],
    [
      -1, 0, 2, 0,
      -1, 4, 4, 0,
      -1, -1
    ],
    [
      -1, 0, 5, 5,
      6, 7, 7, -1,
      -1, -1
    ],
    [
      -1, -1, 0, 5,
      6, 7, 0, -1,
      -1, -1
    ],
    [
      -1, -1, -1, 0,
      0, -1, -1, -1,
      -1, -1
    ],
    [
      -1, -1, -1, 0,
      0, -1, -1, -1,
      -1, -1
    ]
  ],
  lookupTable: {
    1: [ [ 1, 3 ], [ 1, 4 ], [ 2, 3 ], [ 2, 4 ] ],
    2: [ [ 3, 2 ], [ 4, 1 ], [ 4, 2 ], [ 4, 3 ], [ 5, 2 ] ],
    3: [ [ 3, 5 ], [ 4, 5 ], [ 4, 6 ] ],
    4: [ [ 5, 5 ], [ 5, 6 ] ],
    5: [ [ 6, 2 ], [ 6, 3 ], [ 7, 3 ] ],
    6: [ [ 6, 4 ], [ 7, 4 ] ],
    7: [ [ 6, 5 ], [ 6, 6 ], [ 7, 5 ] ],
  },
  victoryIndex: [9,4],
  name: 'The Diabolical Box'
}