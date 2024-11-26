import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CardGenService } from './card-gen.service';
import { PLANTS_LIST } from '../../../assets/anno-1800-plants/plants';
import { CardType } from './CardType';

@Component({
  selector: 'app-memory',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule
  ],
  templateUrl: './memory.component.html',
  styleUrl: './memory.component.scss',
})
export class MemoryComponent {
  constructor(private playingCardService: CardGenService) {}
  firstChoice: number | null = null;
  board: CardType[] = []
  pairs : number = 8;
  isLocked: boolean = false;
  gridTemplateRows: number = 4;

  ngOnInit() {
    this.newBoard(this.pairs);
  }

  newBoard(lengthRequirement: number): void {
    //TODO: Move me to firebase-enabled-service + take care of timeout. A better solution?
    this.board = [];
    const plantsLength: number = PLANTS_LIST.length - 1;
    const indiceList: number[] = this.playingCardService.getRandomNumbers_2(
      plantsLength,
      lengthRequirement
    );

    for (const randomIndex of indiceList) {
      const elementName = PLANTS_LIST[randomIndex];
      const displayName = elementName
        .replace(/_/g, ' ')
        .split(' ')
        .map(
          (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join(' ');

      for (let _ = 0; _ < 2; _++) {
        this.board.push({
          element: elementName,
          displayName: displayName,
          isVisible: false,
        });
      }
    }

    //force the loading of all images on init (offline hack)
    for (const variable of [true, false]) {
      setTimeout(() => {
        this.board.forEach((item) => {
          item.isVisible = variable;
        });
      }, 0.1);
    }

    this.board.sort(() => 0.5 - Math.random());
  }

  clickTile(index: number): void {
    const TIMEOUT_DELAY: number = 2000; //delay after click in ms
    if (this.isLocked || this.board[index].isVisible) {
      return;
    }

    let tile: CardType = this.board[index];

    tile.isVisible = true;

    if (this.firstChoice === null) {
      this.firstChoice = index;
    } else {
      let secondTile = this.board[this.firstChoice];
      //reset if not equal
      if (secondTile.element != tile.element) {
        this.isLocked = true;
        setTimeout(() => {
          secondTile.isVisible = false;
          tile.isVisible = false;
          this.isLocked = false;
        }, TIMEOUT_DELAY);
      }

      this.firstChoice = null;
    }
  }

  changeCardAmount(a: number): void {
    //TODO: Don't re-render the board, just add/remove a pair and re-shuffle
    this.pairs += a;
    this.newBoard(this.pairs);
    this.gridTemplateRows = Math.ceil((this.pairs * 2) / 4);
  }

  onOff() {
    for (const item of this.board) {
      item.isVisible = !item.isVisible;
    }
  }
}
