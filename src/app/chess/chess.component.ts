import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { Board } from './Board';
import { FenService } from './fen.service';
import { LegalMovesService } from './legal-moves.service';
import { Mapping } from './Board';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Move } from './Move';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { PawnPromotionComponent } from './pawn-promotion/pawn-promotion.component';
import { PuzzleExtractorService } from './puzzle-extractor.service';

@Component({
  selector: 'app-chess',
  standalone: true,
  imports: [PawnPromotionComponent, FormsModule, MatInputModule, MatFormFieldModule, CommonModule, MatIconModule, MatGridListModule, MatButtonModule,MatCardModule],
  templateUrl: './chess.component.html',
  styleUrl: './chess.component.scss',
})
export class ChessComponent {
sendableFEN: any;

  constructor (private fen : FenService, private legalMovesService : LegalMovesService, private puzzleService: PuzzleExtractorService){}
  board: Board = {pieces: [], pawnPromotionService: '', castling : {whiteKingSide: true, whiteQueenSide: true, blackKingSide: true, blackQueenSide: true}}
  firstMove: any = null;
  secondMove: any = null;
  Mapping = Mapping;
  legalMoves : number[] = []
  flippedBlack: boolean = false;
  moves : Move[] = []
  loadableFEN : string = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"
  isPawnPromotion: string = '';
  pawnIndex: number = -1;
  selectedPosition: number|null = null

  ngOnInit() {
   //rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1
    this.board = this.fen.initFen(this.loadableFEN); // w KQkq - 0 1
  }

  selectPosition(index: number): void {
    if (this.firstMove == null && this.board.pieces[index].fenIdentifier) {
      this.selectedPosition = index;
      this.firstMove = index;
      this.legalMoves = this.legalMovesService.getLegalMoves(this.board, this.firstMove)
    } else if (this.firstMove != null){
      this.secondMove = index;
      this.selectedPosition = null;

      // || true removes move validation
      if(this.legalMoves.includes(this.secondMove) || true){
        this.moves.push( this.getFenByBoard() );
        this.board = this.legalMovesService.getNewBoardState(this.board, this.firstMove, this.secondMove);

        //pawn promotion service
        if( this.board.pawnPromotionService != ''){
          this.isPawnPromotion = this.board.pawnPromotionService;
          this.pawnIndex = this.secondMove;
        }
        

      } else {
        console.log("ILLEGAL MOVE")
      }


      this.firstMove = null;
      this.secondMove = null;
      this.legalMoves = [];
      
    }
  }

  getBorderColor(index: number): string{
    return ""; this.legalMoves.includes(index) ? "2px solid rgb(255, 138, 138)" : '';
  };

  getPositionColor(index: number): string {
    const row = Math.floor(index / 8);
    const col = index % 8;
    return (row + col) % 2 === 0
      ? 'rgb(181, 207, 183)'
      : 'rgb(188, 159, 139)'
  }

  flipBlack(){
    this.flippedBlack = !this.flippedBlack
  }

  changePositionManually(change : number){
    if(this.moves.length > 0){
      const lastElIndex : number = this.moves.length -1;
      this.board = this.fen.initFen(this.moves[lastElIndex].fenString);
      this.moves.pop();
    }
  }

  getFenByBoard(): Move{
    let fenString: string = '';
    let emptyCounter: number = 0;
    this.board.pieces.forEach((item, index)=>{

      if(item.fenIdentifier != ''){

        if(emptyCounter > 0){
          fenString += emptyCounter;
          emptyCounter = 0;
        }

        fenString += item.fenIdentifier
      }

      if(item.fenIdentifier == ''){
        emptyCounter+= 1

        if(emptyCounter == 8){
          fenString+= 8;
          emptyCounter = 0;
        }
      }

      if( (index+1)%8 == 0){
        fenString+= "/"
      }

    })
    fenString = fenString.slice(0, -1); 
    return {fenString: fenString}
  }

  loadFen(a:string){
    this.board = this.fen.initFen(a);
    this.loadableFEN = a
  }

  onChildItemClicked(piece: string){
    console.log("PROMOTING", piece);
    this.board.pieces[this.pawnIndex].fenIdentifier = piece;
    this.board.pawnPromotionService = '';
    this.isPawnPromotion = '';

  }

  newRandomPuzzle(){
    this.board = this.puzzleService.newRandom()
    this.loadableFEN = this.board.fen!
  }
  showSolutionPath(){
    window.alert(this.board.solutionPath)
  }

}