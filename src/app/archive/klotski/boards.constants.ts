import { Board } from "./Board";

export const DEFAULT_GRID: Board = {
  board: [ //9: wall, 0: empty
    9,9,9,1,9,9,9,
    9,2,3,3,0,0,9,
    9,2,3,3,4,4,9,
    9,0,0,5,5,6,9,
    9,0,0,5,5,7,9,
    9,9,9,0,9,9,9,
  ],
  width: 7,
  height: 6,
  victoryId: 1,
  victoryIndex: 38,
  hash:0,
  parentNodeHash: 0,
  movesMade:0,
  name: "[CV058] Get the Ball Out! 1",
  img: "assets/Tallneck-Icon.png"
};

export const DIABOLICAL_BOX: Board = {
  board: [ //9: wall, 0: empty
    9,9,9,9,9,9,9,9,9,
    9,9,9,1,1,9,9,9,9,
    9,9,9,1,1,9,9,9,9,
    9,9,2,0,0,3,0,9,9,
    9,2,2,2,0,3,3,9,9,
    9,0,2,0,9,4,4,0,9,
    9,0,5,5,6,7,7,9,9,
    9,9,0,5,6,7,0,9,9,
    9,9,9,0,0,9,9,9,9,
    9,9,9,0,0,9,9,9,9,
  ],
  width: 9,
  height: 10,
  victoryId: 1,
  victoryIndex: 85,
  hash: 0,
  parentNodeHash: 0,
  movesMade:0,
  name: "[DB153] The Diabolical Box",
};

export const KLOTSKI_2: Board = {
  board: [ //9: wall, 0: empty
    9,9,1,9,9,9,
    9,9,0,9,9,9,
    9,0,2,0,0,9,
    9,9,9,0,9,9,
    9,9,9,3,9,9,
    9,9,9,0,9,9,
  ],
  width: 6,
  height: 6,
  victoryId: 1,
  victoryIndex: 33,
  hash:0,
  parentNodeHash: 0,
  movesMade:0,
};

export const KLOTSKI_3: Board = {
  board: [ //9: wall, 0: empty
    9,9,9,9,9,9,
    9,2,1,1,11,9,
    9,3,1,1,4,9,
    9,0,5,5,0,9,
    9,6,7,8,10,9,
    9,6,7,8,10,9,
    9,9,0,0,9,9,
  ],
  width: 6,
  height: 7,
  victoryId: 1,
  victoryIndex: 20,
  hash:0,
  parentNodeHash: 0,
  movesMade:0,
};