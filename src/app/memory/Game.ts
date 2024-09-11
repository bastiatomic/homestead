import { Card } from "./../cards/CardType";

export interface Game {
    board: Card[];
    pairs: number; // derived from board.length/2
    timePlayed?: number;
    uuid?: string; //store a game in the cloud
    successRate?: number;
    pairsFound: number;
    boardIndice: number[];
}