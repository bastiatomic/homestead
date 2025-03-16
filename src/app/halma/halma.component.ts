import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MoveGeneratorService } from './move-generator.service';
import { indexToString } from './IndexToString';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { basicBoardSetup } from './BasicBoardSetup';
import { Observable, map } from 'rxjs';
import { BoardType, initialBoard } from './BoardStates';

@Component({
  selector: 'app0,halma',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './halma.component.html',
  styleUrl: './halma.component.scss',
})
export class HalmaComponent {
  //TODO: the key of each NeighborMarbles is a x,y coordinate useful to draw the marbles later

  marbleStyle: { [key: string]: any } = {};
  board$: Observable<BoardType> = new Observable<{}>();
  currentPlayerId: number = 1;

  agentColorMappingXX: { [key: number]: string } = {
    1: 'rgb(255, 179, 186)', // Pastel Red
    2: 'rgb(179, 205, 224)', // Pastel Blue
    3: 'rgb(186, 255, 201)', // Pastel Green
    4: 'rgb(255, 255, 186)', // Pastel Yellow
    5: 'rgb(218, 179, 255)', // Pastel Purple
    6: 'rgb(255, 204, 153)', // Pastel Orange
  };
  agentColorMapping: { [key: number]: string } = {
    1: 'rgb(255, 0, 102)', // Neon Pink
    2: 'rgb(0, 204, 255)', // Electric Cyan
    3: 'rgb(0, 255, 128)', // Neon Green
    4: 'rgb(255, 255, 0)', // Vivid Yellow
    5: 'rgb(153, 51, 255)', // Deep Purple
    6: 'rgb(255, 102, 0)', // Bright Orange
  };

  canBeTargetLocation = new Set();

  indexToString = indexToString;

  selectedMarble: number | null = null;

  drawableBoard$: Observable<number[]> = new Observable<[]>();

  constructor(private readonly moveGenerator: MoveGeneratorService) {}

  ngOnInit() {
    this.board$ = this.moveGenerator.startReactiveTest();
    this.marbleStyle = basicBoardSetup;
    //this.initAgentColors();
  }

  start() {
    //start service
    this.moveGenerator.getValidMovesByBoardState(); //changes the observable board$

    this.drawableBoard$ = this.board$.pipe(
      map((board) => this.transformBoard(board)) //change detection
    );
  }
  clickMarble(i: number) {
    //TODO: What happens when I click a non-occupied?
    if (!this.selectedMarble) {
      this.selectedMarble = i;
    } else {
      this.moveGenerator.handleMove2([this.selectedMarble, i]);
      this.selectedMarble = null;
    }
  }

  initAgentColors(board?: BoardType) {
    if (!board) {
      board = initialBoard;
    }

    /*let drawableBoard = Array.from({ length: 121 }, (_) => 0);

    for (const playerId of ['1', '2', '3', '4', '5', '6'] as const) {
      for (const index of board[playerId]) {
        drawableBoard[index] = Number(playerId);
      }
    }
    this.board$ = of(drawableBoard);*/
  }

  stopGame() {
    this.moveGenerator.stopUpdatingBoardState();
  }

  resetDefault() {
    this.initAgentColors();
  }
  transformBoard(board: BoardType): number[] {
    if (!board) {
      return [];
    }

    let drawableBoard = Array.from({ length: 121 }, (_) => 0);

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
}
