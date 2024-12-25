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
import { first } from 'rxjs';

@Component({
  selector: 'app-chess',
  standalone: true,
  imports: [PawnPromotionComponent, FormsModule, MatInputModule, MatFormFieldModule, CommonModule, MatIconModule, MatGridListModule, MatButtonModule,MatCardModule],
  templateUrl: './chess.component.html',
  styleUrl: './chess.component.scss',
})
export class ChessComponent {

  constructor (private fen : FenService, private moveGeneratorService : MoveGeneratorService, private puzzleService: PuzzleExtractorService){}
  board: Board = {pieces: [], pawnPromotionService: '', castling : {whiteKingSide: true, whiteQueenSide: true, blackKingSide: true, blackQueenSide: true}, activeColor: 'w'}
  firstMove: any = null;
  secondMove: any = null;
  Mapping = Mapping;
  legalMoves : number[] = []
  flippedBlack: boolean = false;
  moves : Board[] = []
  currentFEN : string = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"
  isPawnPromotion: string = '';
  pawnIndex: number = -1;
  selectedPosition: number|null = null
  sendableFEN: any;

  ngOnInit() {
    //TODO: The first move of the database gets played always!
    this.board = this.fen.initFen(this.currentFEN); // w KQkq - 0 1
    console.log(this.board)
  }

  selectPosition(index: number): void {
    if (this.firstMove == null && this.board.pieces[index].fenIdentifier) {
      this.selectedPosition = index;
      this.firstMove = index;
      this.legalMoves = this.moveGeneratorService.getLegalMoves(this.board, this.firstMove)
    } else if (this.firstMove != null){
      this.secondMove = index;
      this.selectedPosition = null;

      // || true removes move validation
      if(this.legalMoves.includes(this.secondMove) || true){
        this.moves.push( this.board );
        this.board = this.moveGeneratorService.getNewBoardState(this.board, this.firstMove, this.secondMove);
        this.board.activeColor === 'w'?  this.board.activeColor='b':  this.board.activeColor='w'

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
      this.board = this.fen.initFen(this.moves[lastElIndex].fen!);
      this.moves.pop();
    }
  }

  loadFen(a:string){
    this.board = this.fen.initFen(a);
    this.currentFEN = a
  }

  onChildItemClicked(piece: string){
    console.log("PROMOTING", piece);
    this.board.pieces[this.pawnIndex].fenIdentifier = piece;
    this.board.pawnPromotionService = '';
    this.isPawnPromotion = '';

  }

  newRandomPuzzle(){
    this.board = this.puzzleService.newRandom()
    this.currentFEN = this.board.fen!
    console.log(this.board)
    
    //make first move
    console.log(this.board.solutionPath![0])

    let firstIndex : number = this.board.solutionPath![0][0].charCodeAt(0) - 'a'.charCodeAt(0) + 1
    firstIndex += 64- (Number(this.board.solutionPath![0][1])*8)-1;
    let secondIndex : number= this.board.solutionPath![0][2].charCodeAt(0) - 'a'.charCodeAt(0) + 1
    secondIndex += 64- (Number(this.board.solutionPath![0][3])*8)-1;
    console.log(firstIndex, secondIndex)
    this.moveGeneratorService.getNewBoardState(this.board, firstIndex, secondIndex)
    this.board.activeColor === 'w'?  this.board.activeColor='b':  this.board.activeColor='w'

  }
  showSolutionPath(){
    window.alert(this.board.solutionPath)
  }

}