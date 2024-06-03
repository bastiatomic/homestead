import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HostListener } from '@angular/core';
import { Board } from '../board';
import { DEFAULT_BOARD } from '../boards.constant';
import { KEYMAP } from '../keymap.constant';
import { Character } from '../Character';
import { Tile } from '../Tile';
import { LEGACY_mapping } from '../idToPathMapping';

@Component({
  selector: 'app-pathbuilding',
  standalone: true,
  imports: [
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    CommonModule,
    MatIcon,
    MatListModule,
  ],
  templateUrl: './pathbuilding.component.html',
  styleUrl: './pathbuilding.component.scss',
})
export class PathbuildingComponent {
  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key == ' ') {
      this.startGame();
      return;
    }

    this.movePiece(event.key);
    return;
  }

  COLUMNS = 12;
  board: Board = DEFAULT_BOARD;
  KEYMAP = KEYMAP;
  imageMapping: { [key: number]: string } = LEGACY_mapping

  //character position

  character: Character = {
    position: { x: 0, y: -250 },
    index: { x: this.board.startIndex.x, y: this.board.startIndex.y },
    direction: 'd',
  };

  rewardsLeft: number = 0;

  arrowList: string[] = ['w', 's', 'a', 'd', 'jump'];
  selectedArrow: string | null = null;
  indexToDirection: { [key: number]: string } = {
    40: 'w',
    41: 'a',
    42: 's',
    43: 'd',
  };

  ngOnInit() {
    this.board.grid.forEach((row) => {
      this.rewardsLeft += row.filter((item) => item.bg == 30).length;
    });
  }

  clickTile(row: number, column: number): void {
    let map: { [key: string]: number } = { w: 40, a: 41, s: 42, d: 43 };

    let tile: Tile = this.board.grid[column][row];

    if (tile.bg >= 40 && !this.selectedArrow) {
      console.log('reset');
      tile.bg = 0;
    }

    if (this.selectedArrow) {
      tile.bg = map[this.selectedArrow];
      this.selectedArrow = null;
    }
  }

  movePiece(direction: string): void {
    let directionIndiceIncrement: { x: number; y: number } =
      this.KEYMAP[direction].indexIncrement;

    const newX: number = this.character.index.x + directionIndiceIncrement.x;
    const newY: number = this.character.index.y + directionIndiceIncrement.y;

    //calculate newMove
    const newTileId: number = this.board.grid[newY][newX].bg;

    //reward found
    if (this.board.grid[newY][newX].bg == 30) {
      setTimeout(() => {
        this.board.grid[newY][newX].bg = 0;
        this.rewardsLeft -= 1;
        console.log('grabbed a delicious cake along your journey');
      }, 300);
      //decrement reward counter
    }

    switch (newTileId) {
      case 2:
        return;
      case 3:
        return;
      case 4:
        return;
      case 11:
        return;
      case 21: {
        this.board.grid.forEach((row) => {
          row.forEach((item) => {
            if (item.bg == 11) {
              item.bg = 10;
            } else if (item.bg == 10) {
              item.bg = 11;
            }
          });
        });
      }
    }
    //move is valid
    if (newX < 12 && newX >= 0 && newY >= 0 && newY < 9) {
      this.character.index = { x: newX, y: newY };
      this.character.position.x += this.KEYMAP[direction].pixelIncrementX;
      this.character.position.y += this.KEYMAP[direction].pixelIncrementY;
      return;
    }
  }

  containsReward(a: number): boolean {
    return this.board.grid[Math.floor(a / 12)][a % 12].bg == 30;
  }

  selectArrow(arrow: string) {
    this.selectedArrow = arrow;
  }

  startGame(depth: number = 50) {
    if (depth <= 0) {
      return;
    }
    let me = this.character;

    setTimeout(() => {
      this.movePiece(me.direction);
      let newLocation: number = this.board.grid[me.index.y][me.index.x].bg;

      if (newLocation == 20) {
        console.log('Finished!');
        return;
      }

      if (newLocation >= 40) {
        me.direction = this.indexToDirection[newLocation];
        this.board.grid[me.index.y][me.index.x].bg = 0;
      }
      this.startGame(depth - 1);
    }, 300);
  }
}
