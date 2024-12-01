import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MoveGeneratorService } from './move-generator.service';
import { BoardMap, SlidingBoard } from './boardmap';
import { blockColors } from './colors.const';
import {
  DB118,
  DEFAULT_GRID,
  DIABOLICAL_BOX,
  SLIDING_STONES,
  TESTING_BOARD,
} from './boards.const';

@Component({
  selector: 'app-sliding',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './sliding.component.html',
  styleUrl: './sliding.component.scss',
})
export class SlidingComponent {
  constructor(private moveGenerator: MoveGeneratorService) {}

  board: number[] = [];
  boardMap: BoardMap = {};
  firstSelection: null | number = null;
  blockColors = blockColors;
  selectedMap = TESTING_BOARD;
  DIMENSION = 0
  NAME = ''
  boardList : SlidingBoard[] = [DB118, DEFAULT_GRID, SLIDING_STONES, DIABOLICAL_BOX]

  Directions: { [key: string]: number } = {
    up: -this.DIMENSION,
    down: this.DIMENSION,
    left: -1,
    right: 1,
  };
  moveDirection = [
    { value: -1, borderPosition: 'border-left' },
    { value: 1, borderPosition: 'border-right' },
    { value: -this.DIMENSION, borderPosition: 'border-top' },
    { value: +this.DIMENSION, borderPosition: 'border-bottom' },
  ];

  blockDesigns: { [key: number]: { [key: string]: string } } = {};

  ngOnInit() {
    this.selectBoard(TESTING_BOARD)
  }

  clickPosition(index: number) {
    if (this.firstSelection == null) {
      this.firstSelection = index;
    } else {
      const tmpDirection: string = this.getDirectionByIndice(
        this.firstSelection,
        index
      );
      const result = this.moveGenerator.moveBlock(
        this.boardMap,
        this.board[this.firstSelection],
        this.Directions[tmpDirection]
      );

      if(result){
        this.boardMap = result;
        this.board = this.mapToBoard(this.boardMap);
      }
      
      this.firstSelection = null;
    }
  }

  getDirectionByIndice(first: number, second: number): string {
    if (first == second) {
      return '';
    }

    const firstRowIndex: number = Math.floor(first / this.DIMENSION);
    const secondRowIndex: number = Math.floor(second / this.DIMENSION);

    if (secondRowIndex != firstRowIndex) {
      return secondRowIndex > firstRowIndex ? 'down' : 'up';
    }

    return second > first ? 'right' : 'left';
  }

  solve() {
    const result = this.moveGenerator.bfs(
      this.boardMap,
      this.DIMENSION,
      this.selectedMap.victoryIndex
    );

    this.board = this.mapToBoard(result);
  }

  mapToBoard(boardMap: BoardMap): number[] {
    let board: number[] = Array(this.DIMENSION*this.DIMENSION).fill(9);
    for (const [key, value] of Object.entries(boardMap)) {
      for (const index of value) {
        board[index] = Number(key);
      }
    }
    return board;
  }
  getDynamicStyle(tileNumber: number, index: number): { [key: string]: any } {
    let borderString: { [key: string]: any } = {};

    if (tileNumber !== 9) {
      for (const direction of this.moveDirection) {
        if (this.board[index] !== this.board[index + direction.value]) {
          borderString[direction.borderPosition] = '1px solid black';
        }
      }
    }

    return borderString;
  }
  selectBoard(board: SlidingBoard){
    this.DIMENSION = board.dimension
    this.boardMap = board.boardMap;
    this.board = this.mapToBoard(board.boardMap);
    this.NAME = board.name!
    console.log(this.board)

    this.Directions = {
      up: -this.DIMENSION,
      down: this.DIMENSION,
      left: -1,
      right: 1,
    };
    this.moveDirection = [
      { value: -1, borderPosition: 'border-left' },
      { value: 1, borderPosition: 'border-right' },
      { value: -this.DIMENSION, borderPosition: 'border-top' },
      { value: +this.DIMENSION, borderPosition: 'border-bottom' },
    ];
  }
}
