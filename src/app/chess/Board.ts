export interface Board {
  //define a board for a service
  pieces: Piece[];
  fen? : string;
  activeColor: string;
  halfmoveClock?: Number;
  enPassant?: String;
  castling: {
    whiteKingSide: Boolean;
    whiteQueenSide: Boolean;
    blackKingSide: Boolean;
    blackQueenSide: Boolean;
  };
  pawnPromotionService: string;
  solutionPath?: string[];
  rating? : number;
}

interface Piece {
  fenIdentifier: string;
}

export const Mapping: { [key: string]: string } = {
  r: 'r_black_rook',
  n: 'n_black_knight',
  b: 'b_black_bishop',
  q: 'q_black_queen',
  k: 'k_black_king',
  p: 'p_black_pawn',
  R: 'R_white_rook',
  N: 'N_white_knight',
  B: 'B_white_bishop',
  Q: 'Q_white_queen',
  K: 'K_white_king',
  P: 'P_white_pawn',
};