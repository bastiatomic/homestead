export interface Piece {
    name?: String,
    icon?: String,
    color?: String //depending on name?
    index: number
    fenIdentifier?: String
}

export const Mapping : { [key: string]: string }= {
    r: "r_black_rook",
    n: "n_black_knight",
    b: "b_black_bishop",
    q: "q_black_queen",
    k: "k_black_king",
    p: "p_black_pawn",
    R: "R_white_rook",
    N: "N_white_knight",
    B: "B_white_bishop",
    Q: "Q_white_queen",
    K: "K_white_king",
    P: "P_white_pawn"
      
}