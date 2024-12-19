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
  name: '[CV058] Get the Ball Out! 1',
  img: 'assets/Tallneck-Icon.png',
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
  name: '[CV058] Get the Ball Out! 1',
  img: 'assets/Tallneck-Icon.png',
};

export const DB118: SlidingBoard = {
  boardMap: {
    '0': [17, 18, 19, 20, 21, 22, 25, 30, 59, 60],
    '1': [3, 4, 11, 12],
    '2': [59, 60],
    '3': [28, 29, 36],
    '4': [34, 42, 43],
    '5': [37, 44, 45],
    '6': [51, 52],
    '7': [26, 27, 35],
},
  dimension: 8,
  victoryId: 1,
  victoryIndex: 60,
  name: 'DB118',
  img: 'null',
};

export const SLIDING_STONES: SlidingBoard = {
  boardMap: {
    '0': [25, 26, 27, 28, 31, 32, 33, 34],
    '2': [33],
    '1': [8, 9, 14, 15],
    '6': [21, 22, 16],
    '3': [13, 19, 20],
    '4': [3, 4, 10],
    '5': [1, 2, 7],
  },
  
  dimension: 6,
  victoryId: 1,
  victoryIndex: 5,
  name: 'sliding stones',
};

export const DIABOLICAL_BOX : SlidingBoard = {
  boardMap: {
    '0': [
      33, 34, 36, 44, 51, 53,
      57, 61, 72, 76, 83, 84,
      93, 94
    ],
    '1': [ 13, 14, 23, 24 ],
    '2': [ 32, 41, 42, 43, 52 ],
    '3': [ 35, 45, 46 ],
    '4': [ 55, 56 ],
    '5': [ 62, 63, 73 ],
    '6': [ 64, 74 ],
    '7': [ 65, 66, 75 ],
    '9': [
       0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11,
      12, 15, 16, 17, 18, 19, 20, 21, 22, 25, 26, 27,
      28, 29, 30, 31, 37, 38, 39, 40, 47, 48, 49, 50,
      54, 58, 59, 60, 67, 68, 69, 70, 71, 77, 78, 79,
      80, 81, 82, 85, 86, 87, 88, 89, 90, 91, 92, 95,
      96, 97, 98, 99
    ]
  }
  ,
  dimension: 10,
  victoryId: 1,
  victoryIndex: 84,
  
  name: "[DB153] The Diabolical Box",
};

export const V4_GET_BALL_OUT: SlidingBoard2 = {
  board: [
    [  -1,-1, -1, 1, -1, -1, -1 ],
    [  -1,7, 3, 3, 0, 0, -1 ],
    [  -1,7, 3, 3, 4, 4, -1 ],
    [ -1, 0, 0, 5, 5, 6, -1 ],
    [ -1, 0, 0, 5, 5, 8, -1 ],
    [  -1,-1, -1, 0, -1, -1, -1 ]
  ],
  lookupTable: {
    1: [ [ 0, 3 ] ],
    3: [ [ 1, 2 ], [ 1, 3 ], [ 2, 2 ], [ 2, 3 ] ],
    4: [ [ 2, 4 ], [ 2, 5 ] ],
    5: [ [ 3, 3 ], [ 3, 4 ], [ 4, 3 ], [ 4, 4 ] ],
    6: [ [ 3, 5 ] ],
    7: [ [ 1, 1 ], [ 2, 1 ] ],
    8: [ [ 4, 5 ] ],
  },
  victoryIndex: [ 5, 3 ] // 5, 3
};