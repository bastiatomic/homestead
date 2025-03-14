import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MoveGeneratorService } from './move-generator.service';
import { indexToString } from './IndexToString';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { basicBoardSetup } from './BasicBoardSetup';
import { zip, from, interval, BehaviorSubject, Observable, of } from 'rxjs';
import { BoardState } from './Interfaces';

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
  board$: Observable<number[]> = new Observable<[]>();
  currentPlayerId: number = 1;

  agentColorMapping: { [key: number]: string } = {
    1: 'rgb(255, 179, 186)', // Pastel Red
    2: 'rgb(179, 205, 224)', // Pastel Blue
    3: 'rgb(186, 255, 201)', // Pastel Green
    4: 'rgb(255, 255, 186)', // Pastel Yellow
    5: 'rgb(218, 179, 255)', // Pastel Purple
    6: 'rgb(255, 204, 153)', // Pastel Orange
  };

  indexToString = indexToString;

  constructor(private readonly moveGenerator: MoveGeneratorService) {}

  ngOnInit() {
    this.marbleStyle = basicBoardSetup;
    this.initAgentColors();
  }

  start() {

    //start service
    this.moveGenerator.getValidMovesByBoardState(2);

    this.board$ = this.moveGenerator.startReactiveTest();

  }

  clickMarble(index: number, playerId: number) {}

  initAgentColors(board?: BoardState) {
    if (!board) {
      board = this.moveGenerator.initBoardByBoardState();
    }

    let drawableBoard = Array.from({ length: 121 }, (_, i) => 0);

    for (const playerId of ['1', '2', '3', '4', '5', '6'] as const) {
      for (const index of board[playerId]) {
        drawableBoard[index] = Number(playerId);
      }
    }
    this.board$ = of(drawableBoard);
  }

  stopGame() {
    this.moveGenerator.stopUpdatingBoardState();
  }

  resetDefault(){
    this.initAgentColors()
  }
}
