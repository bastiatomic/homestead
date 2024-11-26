import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DEFAULT_GRID, DB118 } from './example-boards';
import { MatButtonModule } from '@angular/material/button';
import { MoveGeneratorService } from './move-generator.service';
import { BoardMap } from './BoardMap';
import { blockColors } from './Colors';
import { Directions } from './Directions';

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
  blockDesigns: { [key: number]: { [key: string]: string } } = {};
  moveDirection = [
    {value: -1, border_position: 'border-left'},
    {value: +1, border_position: 'border-right'},
    {value: -8, border_position: 'border-top'},
    {value: +8, border_position: 'border-bottom'}
  ];
  WIDTH = DB118.width
  HEIGHT = DB118.height

  ngOnInit() {
    this.boardMap = DB118.boardMap;
    this.board = this.mapToBoard(this.boardMap);
    
  }

  clickPosition(index: number) {
    console.log('click on', index);
    if (this.firstSelection == null) {
      this.firstSelection = index;
    } else {
      const tmpDirection: string = this.getDirectionByIndice(
        this.firstSelection,
        index
      );
      console.log(tmpDirection);
      this.boardMap = this.moveGenerator.moveBlock(
        this.boardMap,
        this.board[this.firstSelection],
        Directions[tmpDirection]
      );
      this.board = this.mapToBoard(this.boardMap);
      this.firstSelection = null;
    }
  }

  getDirectionByIndice(
    first: number,
    second: number,
    width: number = 8
  ): string {

    if (first == second) {
      return '';
    }

    const firstRowIndex: number = Math.floor(first / width);
    const secondRowIndex: number = Math.floor(second / width);
    console.log(firstRowIndex, secondRowIndex);

    if (secondRowIndex > firstRowIndex) {
      return 'down';
    } else if (secondRowIndex < firstRowIndex) {
      return 'up';
    }

    if (second > first) {
      return 'right';
    } else if (first > second) {
      return 'left';
    }
    return '';
  }

  solve() {
    this.boardMap = this.moveGenerator.moveBlock(this.boardMap, 4, -8);
    this.board = this.mapToBoard(this.boardMap);
  }

  mapToBoard(boardMap: BoardMap): number[] {
    let board: number[] = Array(this.WIDTH*this.HEIGHT).fill(9);
    for (const [key, value] of Object.entries(boardMap)) {
      const numKey = Number(key);
      for (const index of value) {
        board[index] = numKey;
      }
    }
    return board;
  }
  getDynamicStyle(tileNumber: number, index: number): {[key: string]: any} {
    let borderString : {[key: string]: any} = {};
    borderString['background-color'] = this.blockColors[tileNumber]

    if(this.board[index] !== 9 ){
      for(const direction of this.moveDirection){
        if(this.board[index] !== this.board[index+direction.value]){
          borderString[direction.border_position] = "1px solid black"
        }
      }
    }
    return borderString;
  }

}
