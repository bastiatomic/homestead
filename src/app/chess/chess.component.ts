import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { Board } from './Board';
import { FenService } from './fen.service';
import { MoveGeneratorService } from './move-generator.service';
import { Mapping } from './Board';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { PawnPromotionComponent } from './pawn-promotion/pawn-promotion.component';
import { PuzzleExtractorService } from './puzzle-extractor.service';
import { MoveFinderService } from './move-finder';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-chess',
  standalone: true,
  imports: [MatListModule, PawnPromotionComponent, FormsModule, MatInputModule, MatFormFieldModule, CommonModule, MatIconModule, MatGridListModule, MatButtonModule,MatCardModule],
  templateUrl: './chess.component.html',
  styleUrl: './chess.component.scss',
})
export class ChessComponent {

  // REFACTOR ME INTO MORE SERVICES. COMPONENTS IS JUST FOR DISPLAY/GATHERING DATA
  // USE CHESS.JS FOR MOVE GENERATION. BUT EXATRACT ALL FUNCTIONS. MAYBE USE FIREBASE FUNCTIONS?
  // FIREBASE FUNCTION: GIVEN A POSITION, RETURN ALL VALID MOVES.
  // ADD NOTES TO EACH CHESS RIDDLE. 100% MOBILE-FIRST
  // USE FIREBASE FILTERING TO GATHER RIDDLES BASED ON SEARCH QUERY.
  // USE HORIZON FIGURES, BUT ALLOW RESEMBLENCE TO 

  constructor (private fen : FenService, private moveGeneratorService : MoveGeneratorService, private puzzleService: PuzzleExtractorService, private moveFinder: MoveFinderService){}
  board: Board = {pieces: [], pawnPromotionService: '', castling : {whiteKingSide: true, whiteQueenSide: true, blackKingSide: true, blackQueenSide: true}, activeColor: 'w'}
  firstMove: any = null;
  secondMove: any = null;
  Mapping = Mapping;
  legalMoves : number[] = []
  flippedBlack: boolean = false;
  moves : Board[] = []
  isPawnPromotion: string = '';
  pawnIndex: number = -1;
  selectedPosition: number|null = null //used to mark position on board
  isSolutionPathVisible: boolean = false

  ngOnInit() {
    this.board = this.fen.initFen('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1');
    this.moveFinder.getValidMoves(this.board);
  }

  selectPosition(index: number): void {
    if (this.firstMove == null && this.board.pieces[index].fenIdentifier) {
      this.selectedPosition = index;
      this.firstMove = index;
      //this.legalMoves = this.moveGeneratorService.getLegalMoves(this.board, this.firstMove)
    } else if (this.firstMove != null){
      this.secondMove = index;
      this.selectedPosition = null;

      // NO MOVE VALIDATION
      this.moves.push( JSON.parse(JSON.stringify(this.board )));
      this.board = this.moveGeneratorService.getNewBoardState(this.board, this.firstMove, this.secondMove);
      this.board.activeColor === 'w'?  this.board.activeColor='b':  this.board.activeColor='w'

      //pawn promotion service
      if( this.board.pawnPromotionService != ''){
        this.isPawnPromotion = this.board.pawnPromotionService;
        this.pawnIndex = this.secondMove;
      }

      this.firstMove = null;
      this.secondMove = null;
      this.legalMoves = [];
      
    }
  }

  getPositionColor(index: number, darkness:number = 1): string {
    //TODO: This should be a JSON to promote performance

    darkness = (this.legalMoves.includes(index)? 0.8 : (index == this.selectedPosition? 0.5 : 1))

    const row = Math.floor(index / 8);
    const col = index % 8;
    return (row + col) % 2 === 0
      ? 'rgb(181, 207, 183, '+darkness+')'
      : 'rgb(188, 159, 139, '+darkness+')'
  }

  flipBlack(){
    this.flippedBlack = !this.flippedBlack
  }

  changePositionManually(change : number){
    if(this.moves.length > 0){
      const lastElIndex : number = this.moves.length -1;
      this.board = this.moves[lastElIndex];
      this.moves.pop();
      console.log(this.moves)
    }
  }

  onChildItemClicked(piece: string){
    console.log("PROMOTING", piece);
    this.board.pieces[this.pawnIndex].fenIdentifier = piece;
    this.board.pawnPromotionService = '';
    this.isPawnPromotion = '';

  }

  newRandomPuzzle(){
    this.board = this.puzzleService.newRandom()
    let promotionPiece: string = ''

    let firstIndex : number = this.board.solutionPath![0][0].charCodeAt(0) - 'a'.charCodeAt(0) + 1
    firstIndex += 64- (Number(this.board.solutionPath![0][1])*8)-1;
    let secondIndex : number= this.board.solutionPath![0][2].charCodeAt(0) - 'a'.charCodeAt(0) + 1
    secondIndex += 64- (Number(this.board.solutionPath![0][3])*8)-1;

    //advancement happend
    if(this.board.solutionPath![0][4]){
      promotionPiece =this.board.solutionPath![0][4]
    }

    this.moveGeneratorService.getNewBoardState(this.board, firstIndex, secondIndex,promotionPiece)
    this.board.activeColor === 'w'?  this.board.activeColor='b':  this.board.activeColor='w'
    this.isSolutionPathVisible = false;

  }
  showSolutionPath(){
    this.isSolutionPathVisible = !this.isSolutionPathVisible
  }

}