import { Piece } from "./Piece";

export interface Board {
    //define a board for a service
    pieces : Piece[];
    activeColor: String;
    halfmoveClock: Number;
    enPassant: String;
    castling : { whiteKingSide: Boolean; whiteQueenSide: Boolean; blackKingSide: Boolean; blackQueenSide: Boolean }; 

}