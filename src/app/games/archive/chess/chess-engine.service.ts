import { Injectable } from '@angular/core';
import { Piece } from './piece';
import { mappingPiecesScheme } from './mapping-pieces.constant';

@Injectable({
  providedIn: 'root'
})
export class ChessEngineService {

  constructor() { }

  fenInit = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"


  fenToBoard(fenString: string): Piece[]{
    //White = UPPERCASE; black: lowercase
    let pieceList : Piece[] = []

    let boardIndex = 0

    for(let i = 0; i<fenString.length; i++){
        let item = fenString[i]

        if(Number(item)){
          let a = Number(item)
           boardIndex += Number(a)
           item = "/"
           for(let i = 0; i<a; i++){
            pieceList.push({altText: item, index: boardIndex, img: mappingPiecesScheme[item]})
           }
        }
        
        switch(item){
            case "/":{
                break;
            }
            default: {
                pieceList.push({altText: item, index: boardIndex, img: mappingPiecesScheme[item]})
                boardIndex+= 1
                break;
            }
        }
    }

    return pieceList
  }

  makeMove(firstMoveIndex: number, secondMoveIndex: number, grid: Piece[]): Piece[]{

    let tmp = grid[secondMoveIndex];

    grid[secondMoveIndex].img = grid[firstMoveIndex].img
    grid[firstMoveIndex].img = mappingPiecesScheme["/"]

    return grid;
  }

}
