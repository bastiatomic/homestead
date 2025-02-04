import { Chess } from "chess.js";

const chess = new Chess('r1k4r/p2nb1p1/2b4p/1p1n1p2/2PP4/3Q1NB1/1P3PPP/R5K1 b - - 0 19');

const chessMoves = chess.moves()

console.log(chessMoves)


