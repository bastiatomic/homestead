import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MoveGeneratorService } from './move-generator.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { basicBoardSetup } from './BasicBoardSetup';
import { Observable, map } from 'rxjs';
import {
  BoardType,
  initialBoard,
  onePlayerBoard,
  twoPlayerBoard,
} from './BoardStates';
import { agentColorMapping } from './Interfaces';

@Component({
  selector: 'app0,halma',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './halma.component.html',
  styleUrl: './halma.component.scss',
})
export class HalmaComponent {
  //TODO: the key of each NeighborMarbles is a x,y coordinate useful to draw the marbles later
  scaleFactor = 1.2;

  marbleStyle: { [key: string]: any } = {};

  canBeTargetLocation = new Set();

  selectedMarble: number | null = null;

  drawableBoard$: Observable<number[]> = new Observable<[]>();

  playerAmount = 2;

  firstIndexClicked: number | null = null;

  agentColorMapping = agentColorMapping;

  constructor(private readonly moveGenerator: MoveGeneratorService) {}

  ngOnInit() {
    this.moveGenerator.boardStateSubject$.next(twoPlayerBoard);

    this.marbleStyle = basicBoardSetup;

    this.drawableBoard$ = this.moveGenerator.boardStateSubject$.pipe(
      map((board) => this.transformBoard(board)) //change detection
    );
  }

  start() {
    this.moveGenerator.getBestMoveByPlayerId();
  }
  clickMarble(i: number) {
    if (!this.selectedMarble) {
      this.selectedMarble = i;
    } else {
      this.moveGenerator.handleMove2([this.selectedMarble!, i]);
      this.selectedMarble = null;
    }
  }

  stopGame() {
    this.moveGenerator.continueWorkflow$.next(false);
    this.moveGenerator.stopUpdatingBoardState();
  }

  resetDefault() {
    console.log('reset');

    //WARNING: initialBoard gets overwritten. Long live call by reference
    this.moveGenerator.setNewBoard(onePlayerBoard);
  }
  transformBoard(board: BoardType): number[] {
    if (!board) {
      return [];
    }

    let drawableBoard = Array.from({ length: 121 }, (_) => 10);

    const allPlayerIds: string[] = Object.keys(board).filter(
      (item) => item !== 'occupied'
    );

    for (const playerId of allPlayerIds) {
      for (const index of board[playerId]) {
        drawableBoard[index] = Number(playerId);
      }
    }

    return drawableBoard;
  }

  randomBoard() {
    this.moveGenerator.getRandomBoard(this.playerAmount);
  }

  evaluate() {
    console.log(null);
  }
  changePlayerAmount(amount: number) {
    this.playerAmount += amount;
    this.randomBoard();
  }

  recursivelyCallBoards() {}
}
