import { Injectable } from '@angular/core';
import { Board } from './Board';
import { KnightsMapping } from './Mappings/Knight';
import { SlidingPiecesDistanceToBorder } from './Mappings/SlidingPieces';
import { PawnMapping } from './Mappings/Pawn';
import { KingMapping } from './Mappings/King';

@Injectable({
  providedIn: 'root',
})
export class LegalMovesService {
  constructor() {}

  getNewBoardState(board: Board, moveA: number, moveB: number): Board {
    let array = board.pieces;

    array[moveB].fenIdentifier = array[moveA].fenIdentifier;
    array[moveA].fenIdentifier = '';

    return board;
  }

  getLegalMoves(board: Board, startPieceIndex: number): number[] {
    console.log('getLegalMoves with', startPieceIndex);
    const fenIdentifier: string = board.pieces[startPieceIndex].fenIdentifier!;
    let legalMoves: number[] = [];

    switch (fenIdentifier) {
      case 'r': {
        return this.getSlidingPositions(board, startPieceIndex, 'rook');
      }
      case 'n': {
        legalMoves = KnightsMapping[startPieceIndex].filter((item) =>
          this.isUpperCase(board.pieces[item].fenIdentifier)
        );
        break;
      }
      case 'b': {
        return this.getSlidingPositions(board, startPieceIndex, 'bishop');
      }
      case 'q': {
        return this.getSlidingPositions(board, startPieceIndex, 'queen');
      }
      case 'k': {
        return this.getKingPositions(board, startPieceIndex, "black")

      }
      case 'p': {

        return this.getPawnPositions(board, startPieceIndex, 'black');
      
      }
      case 'R': {
        return this.getSlidingPositions(board, startPieceIndex, 'rook');
      }
      case 'N': {
        legalMoves = KnightsMapping[startPieceIndex].filter((item) =>
          this.isLowerCase(board.pieces[item].fenIdentifier)
        );

        break;
      }
      case 'B': {
        return this.getSlidingPositions(board, startPieceIndex, 'bishop');
      }
      case 'Q': {
        return this.getSlidingPositions(board, startPieceIndex, 'queen');
      }
      case 'K': {
        return this.getKingPositions(board, startPieceIndex, "black")
      }
      case 'P': {
        return this.getPawnPositions(board, startPieceIndex, 'white')
       
      }
    }

    console.log(legalMoves);

    return legalMoves;
  }

  getSlidingPositions(
    board: Board,
    startPieceIndex2: number,
    type: string
  ): number[] {
    const offset = [-8, 8, -1, 1,-9, -7, 7, 9];
    const startPieceIndex = startPieceIndex2;

    let startIndex = 0;
    let endIndex = 0;
    switch (type) {
      case 'rook': {
        startIndex = 0;
        endIndex = 4;
        break;
      }
      case 'bishop': {
        startIndex = 4;
        endIndex = 8;
        break;
      }
      case 'queen': {
        startIndex = 0;
        endIndex = 8;
        break;
      }
      default: window.alert("Something went wrong :( ")
    }

    let legalMoves: number[] = [];

    for (let i = startIndex; i < endIndex; i++) {

      const lengthToBorder = SlidingPiecesDistanceToBorder[startPieceIndex][i];

      for (let j = 1; j <= lengthToBorder; j++) {

        const newPositionIndex : number = startPieceIndex + offset[i]*j
        // empty 
        if (!board.pieces[newPositionIndex].fenIdentifier) {
          legalMoves.push(newPositionIndex);
        }

        //enemy piece
        else if (
          this.isOppositeCase(
            board.pieces[startPieceIndex].fenIdentifier!,
            board.pieces[newPositionIndex].fenIdentifier!
          )
        ) {
          legalMoves.push(newPositionIndex);
          break;
        }
        //friendly piece
        else {
          break;
        }
      }
    }
    return legalMoves;
  }

  getPawnPositions(board: Board, startPieceIndex : number, color: string): number[]{

    const data = PawnMapping[color][startPieceIndex];
    let legalMoves: number[] = [];

    // in front
    if(!board.pieces[data.move].fenIdentifier){
      legalMoves.push(data.move)
    }

    //doubleMove, TODO: if data.move was false, we can skip this
    if(data.doubleMove){
      if(!board.pieces[data.move].fenIdentifier && !board.pieces[data.doubleMove].fenIdentifier){
        legalMoves.push(data.doubleMove)
      }
    }

    if(data.hits){
      data.hits.forEach((element: number) => {
        //empty or enemy
        if(
          this.isOppositeCase(board.pieces[startPieceIndex].fenIdentifier, board.pieces[element].fenIdentifier)){
            legalMoves.push(element)
          }
      });
    }
    return legalMoves;
  }

  getKingPositions(board: Board, startIndex: number, color: string): number[]{
    let localMoves: number[] = [];
    KingMapping[startIndex].forEach((element)=>{

      if(!board.pieces[element].fenIdentifier){
        localMoves.push(element)
      }

      else if(this.isOppositeCase(board.pieces[startIndex].fenIdentifier, board.pieces[element].fenIdentifier)){
        localMoves.push(element)
      }
    })

    return localMoves;
  }

  isLowerCase(a: string): boolean {
    if (a === null) {
      return true;
    }
    return a == a.toLowerCase();
  }

  isUpperCase(a: string): boolean {
    if (a === null) {
      return true;
    }
    return a == a.toUpperCase();
  }

  isOppositeCase(char1: string, char2:  string): boolean {

    if(char1 == '' || char2 == ''){
      console.log("ERROR")
      return false;
    }

    if (
      (char1 === char1.toLowerCase() && char2 === char2.toUpperCase()) ||
      (char1 === char1.toUpperCase() && char2 === char2.toLowerCase())
    ) {
      return true;
    } else {
      return false;
    }
  }
}
