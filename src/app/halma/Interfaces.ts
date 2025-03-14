export interface BoardState {
  1: Set<number>;
  2: Set<number>;
  3: Set<number>;
  4: Set<number>;
  5: Set<number>;
  6: Set<number>;
  occupied: Set<number>;
}

export type PlayerId = 1 | 2 | 3 | 4 | 5 | 6;

export const goalDistances: {
  1: number;
  2: number;
  3: number;
  4: number;
  5: number;
  6: number;
} = {
  1: 120,
  2: 98,
  3: 10,
  4: 0,
  5: 22,
  6: 110,
};
