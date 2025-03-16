export type BoardType = { [key: string]: Set<number> };

export const initialBoard: BoardType = {
  '1': new Set([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]),
  '2': new Set([19, 20, 21, 22, 32, 33, 34, 44, 45, 55]),
  '3': new Set([74, 84, 85, 95, 96, 97, 107, 108, 109, 110]),
  '4': new Set([111, 112, 113, 114, 115, 116, 117, 118, 119, 120]),
  '5': new Set([65, 75, 76, 86, 87, 88, 98, 99, 100, 101]),
  '6': new Set([10, 11, 12, 13, 23, 24, 25, 35, 36, 46]),
  occupied: new Set([
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 19, 20, 21, 22, 32, 33, 34, 44, 45, 55, 74,
    84, 85, 95, 96, 97, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117,
    118, 119, 120, 65, 75, 76, 86, 87, 88, 98, 99, 100, 101, 10, 11, 12, 13, 23,
    24, 25, 35, 36, 46,
  ]),
};

export const twoPlayerBoard: BoardType = {
  '1': new Set([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]),
  '3': new Set([74, 84, 85, 95, 96, 97, 107, 108, 109, 110]),
  occupied: new Set([
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 74, 84, 85, 95, 96, 97, 107, 108, 109, 110,
  ]),
};

export const onePlayerBoard: BoardType = {
  '1': new Set([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]),
  '6': new Set([10, 11, 12, 13, 23, 24, 25, 35, 36, 46]),
  occupied: new Set([
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 23, 24, 25, 35, 36, 46,
  ]),
};
