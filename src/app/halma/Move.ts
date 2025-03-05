export interface Move {
  from: number;
  to: number;
}

export interface TraversalPath {
  moves: Move[];
}

export interface TraversalPath2 {
  startIndex: number;
  followingIndices: number[];
}
