import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { CardGenService } from './card-gen.service';
import { PLANTS_LIST } from '../../../assets/anno-1800-plants/plants';
import { Card, Game } from './Game';
import { MinimalismCardImageComponent } from '../cards/minimalism-card-image/minimalism-card.component';

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
  board: Card[] = []
  pairs : number = 8;
  isLockedBoard: boolean = false;
  gridTemplateRows: number = 4;

  ngOnInit() {
    this.newDeck(this.pairs);
  }

  newDeck(lengthRequirement: number): void {
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
    if (this.isLockedBoard || this.board[index].isVisible) {
      return;
    }

    let tile: Card = this.board[index];

    tile.isVisible = true;

    if (this.firstChoice === null) {
      this.firstChoice = index;
    } else {
      let secondTile = this.board[this.firstChoice];
      //reset if not equal
      if (secondTile.element != tile.element) {
        this.isLockedBoard = true;
        setTimeout(() => {
          secondTile.isVisible = false;
          tile.isVisible = false;
          this.isLockedBoard = false;
        }, TIMEOUT_DELAY);
      }

      this.firstChoice = null;
    }
  }

  changeCardAmount(a: number): void {
    this.pairs += a;
    this.newDeck(this.pairs);
    this.gridTemplateRows = Math.ceil((this.pairs * 2) / 4);
  }

  onOff() {
    for (const item of this.board) {
      item.isVisible = !item.isVisible;
    }
  }

  /*
  newGame(pairs: number) {
    let indexList = this.playingCardService.getRandomNumbers(pairs);
    indexList = indexList.concat(indexList);
    indexList = this.playingCardService.shuffle(indexList);

    this.board = []
    indexList.forEach((item)=>{
      this.board.push({
        value: this.cards[item].value,
        symbol: this.cards[item].symbol,
        color: this.cards[item].color,
        isVisible: true,
        id: this.cards[item].value+this.cards[item].symbol+this.cards[item].color
      })
    })

    this.pairsFound = 0;
    this.pairs = this.board.length/2
    this.foundPiece = []

    setTimeout(()=>{
      this.board.forEach((item)=>{
        item.isVisible = false;
      })

    },1)
  }*/
}
