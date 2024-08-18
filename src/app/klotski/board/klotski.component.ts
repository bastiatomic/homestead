import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { HostListener } from '@angular/core';
import { GameEngineService } from '../game-engine.service';
import { COLOR_SCHEME } from '../pastel-colors.constants';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { Board } from '../Board';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {ClipboardModule} from '@angular/cdk/clipboard';
import { DEFAULT_GRID, DIABOLICAL_BOX, KLOTSKI_2 } from '../boards.constants';

@Component({
  selector: 'app-klotski',
  standalone: true,
  imports: [
    ClipboardModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    CommonModule,
    MatButtonModule,
    MatGridListModule,
  ],
  templateUrl: './klotski.component.html',
  styleUrl: './klotski.component.scss',
})
export class KlotskiComponent {
  constructor(private gameEngine: GameEngineService) {}

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    this.selected_key = event.key;
    this.id2 = this.id1!+this.DIRECTIONS[event.key]
    console.log(this.id1!, this.id2!)
    this.sendToEngine(this.id1!, this.id2!)
    this.id1 = this.id2;
    this.id2 = null
  }
  hashString : number[] = DEFAULT_GRID.board;
  //blockList: string[] = [];
  selected_key: any; selected_id: any;
  materialColors = COLOR_SCHEME;
  id1: number | null = null; id2: number | null = null;
  localBoardString: string | number = '';
  localBoard : Board = {board: [], width: 0, height: 0, victoryId: -1, victoryIndex: 0, hash: 0, parentNodeHash: 0, movesMade:0}
  moveSelfSound = new Audio('/assets/move-self.mp3');
  DIRECTIONS: { [key: string]: number } = {};
  timeConsumed = 0
  textColor = "grey"
  showTextColor = false;

  exampleBoards : Board[] = [
   DEFAULT_GRID,
   KLOTSKI_2,
   DIABOLICAL_BOX
  ]

  ngOnInit() {
    this.loadBoard(this.exampleBoards[0])
  
  }

  loadBoard(board: Board){
    this.localBoard = board
    this.DIRECTIONS = {
      w: -this.localBoard.width,
      d: 1,
      s: this.localBoard.width,
      a: -1,
    };
  }

  clickButton(index: number) {
    if (this.id1 == null) {
      this.id1 = index;
    } else {
      this.id2 = index;
      this.sendToEngine(this.id1, this.id2);
      this.id1 = null; this.id2 = null;
    }
  }

  solver(board: Board) {

    this.timeConsumed = performance.now()
    const blockList : Board[] = this.gameEngine.bfs(JSON.parse(JSON.stringify(board))) //moving a deep copy to it
    this.timeConsumed = Math.round(performance.now() - this.timeConsumed);
    this.recursiveCallSolver(blockList)
  }

  recursiveCallSolver(listOfBoards: Board[], index = 0){

    
    if (index < listOfBoards.length) {
      setTimeout(() => {
        this.localBoard = listOfBoards[index];
        this.recursiveCallSolver(listOfBoards, index += 1);
      }, 100);
    }

  }

  reset() {}

  sendToEngine(index1: number, index2: number) {
    let direction: string = '';

    let indexOffset = index2 - index1;

    if (indexOffset <= -5) {
      direction = 'w';
    } else if (indexOffset >= 5) {
      direction = 's';
    } else if (this.isBetween(indexOffset, 1, 4)) {
      direction = 'd';
    } else {
      direction = 'a';
    }

    let newBoard = this.gameEngine
    .playMove(this.localBoard, this.localBoard.board[index1], this.DIRECTIONS[direction]);

    if(newBoard){
      this.localBoard = newBoard;
      this.moveSelfSound.play();
    }
  }

  isBetween(number: number, start: number, end: number) {
    return number >= start && number <= end;
  }
}