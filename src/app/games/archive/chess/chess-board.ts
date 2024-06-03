import { Piece } from "./piece";

export interface Chessboard {
    id?: string;
    grid: Piece[]
}