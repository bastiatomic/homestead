import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MoveGeneratorService } from './move-generator.service';
import { SlidingBoard2 } from './boardmap';
import { blockColors } from './colors.const';
import { V4_DIABOLICAL_BOX, V4_GET_BALL_OUT } from './boards.const';
import { BoardGeneratorService } from './board-generator.service';
import { Piece } from './Pieces';

@Component({
  selector: 'app-sliding',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './sliding.component.html',
  styleUrl: './sliding.component.scss',
})
export class SlidingComponent {
  constructor(private moveGenerator: MoveGeneratorService, private boardGeneratorService: BoardGeneratorService) {}

  selectedMap: SlidingBoard2 = V4_GET_BALL_OUT;

  firstSelection: null | number[] = null;
  blockColors = blockColors;

  NAME = '';
  boardList: SlidingBoard2[] = [V4_DIABOLICAL_BOX, V4_GET_BALL_OUT];

  DirectionsMap: { [key: string]: number[] } = {
    up: [1, 0],
    down: [-1, 0],
    left: [0, -1],
    right: [0, 1],
  };
  moveDirection = [
    { value: [1, 0], borderPosition: 'border-bottom' },
    { value: [-1, 0], borderPosition: 'border-top' },
    { value: [0, -1], borderPosition: 'border-left' },
    { value: [0, 1], borderPosition: 'border-right' },
  ];

  blockDesigns: { [key: number]: { [key: string]: string } } = {};
  pieces = Piece

  ngOnInit() {
    //this.selectedMap.lookupTable = this.moveGenerator.createLookupTable(this.selectedMap.board)
    this.newBoard()
  }

  clickPosition(row1: number, column1: number) : void{
    console.log(this.pieces[8])

    this.pieces.map((row, rowIndex) => {
      row.map((item, columnIndex)=> {
        this.selectedMap.board[row1][column1] = item[0]
      })
    })


    return
    /*if (this.firstSelection == null) {
      this.firstSelection = [row, column];
    } else {
      const tmpDirection: string = this.getDirectionByIndice(
        this.firstSelection,
        [row, column]
      );
      const result = this.moveGenerator.V4_moveBlock(
        this.selectedMap,
        this.DirectionsMap[tmpDirection],
        this.selectedMap.board[this.firstSelection[0]][this.firstSelection[1]]
      );

      if (result) {
        this.selectedMap = result;
      }

      this.firstSelection = null;
    }*/
  }

  getDirectionByIndice(first: number[], second: number[]): string {
    if (first == second) {
      return '';
    }

    if (first[0] != second[0]) {
      return first[0] > second[0] ? 'down' : 'up';
    }

    return first[1] < second[1] ? 'right' : 'left';
  }

  solve() {
    return
    const result : SlidingBoard2[] = this.moveGenerator.bfs(this.selectedMap);

    if(result){
      result.forEach((slidingBoard, index) => {
        setTimeout(() => {
          this.selectedMap = slidingBoard;
        }, index * 300); // Delay each number by 1 second
      });
      
    }

    
  }

  getDynamicStyle(
    row: number,
    column: number,
    blockId: number
  ): { [key: string]: any } {
    let borderString: { [key: string]: any } = {};
    if (blockId != -1 && blockId != -99) {
      for (const direction of this.moveDirection) {
        try {
          const neighbor =
            this.selectedMap.board[row + direction.value[0]][
              column + direction.value[1]
            ];
          if (neighbor !== blockId) {
            borderString[direction.borderPosition] = '1px solid black';
          }
        } catch {}
      }
    }

    return borderString;
  }

  selectBoard(board: SlidingBoard2) {
    this.selectedMap = board
    this.selectedMap.lookupTable = this.moveGenerator.createLookupTable(this.selectedMap.board)
    console.log(this.selectedMap)
  }

  newBoard(){
    this.selectedMap = this.boardGeneratorService.newBoard()
  }
}
