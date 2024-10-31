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
  imports: [CommonModule, MatButtonModule, MatCardModule, MatIcon, MinimalismCardImageComponent],
  templateUrl: './memory.component.html',
  styleUrl: './memory.component.scss',
})
export class MemoryComponent {

  constructor( private playingCardService : CardGenService) { }
  allHidden = false;
  firstChoice: number | null = null;
  game: Game = {board: [], pairs: 8, successRate: -1, pairsFound:0, uuid: "-", boardIndice: []}
  foundPiece : string[] = []

  ngOnInit() {
    this.newDeck(this.game.pairs)

    //force the loading of all images on init (offline hack)
    for(const variable of [true, false]){
      setTimeout(()=>{
        this.game.board.forEach((item)=> {item.isVisible = variable})
      },0.1)
    }
    
  }

  newDeck(lengthRequirement: number): void {
    const plantsLength: number = PLANTS_LIST.length - 1;
    const indiceList : number[] = this.playingCardService.getRandomNumbers_2(plantsLength, lengthRequirement)

    for (const randomIndex of indiceList) {
      const elementName = PLANTS_LIST[randomIndex];

      for(let _ = 0; _<2; _++){
        this.game.board.push({ element: elementName, displayName: elementName.replace(/_/g, ' '), isVisible: false, isLocked: false });
      }
     
    }

    this.game.board.sort(() => 0.5 - Math.random());
  }

  clickTile(index: number): void {
    let tile: Card = this.game.board[index];
    if(tile.isLocked){return}

    tile.isVisible = true;
    
    if (this.firstChoice == null) {
      this.firstChoice = index;
    } else {
     

      //reset if not equal
      if(this.game.board[this.firstChoice!].element != tile.element){

        this.lockBoard(true)

        setTimeout(()=>{
          this.game.board[this.firstChoice!].isVisible = false;
          tile.isVisible = false;
          this.firstChoice = null;
          this.lockBoard(false)
        },2000)
      }
      else {
        //success case
        this.firstChoice = null;
      }

    }
  }

  changeCardAmount(a: number): void{
    this.game.pairs += a;
    this.newDeck(this.game.pairs)
  }

  lockBoard(lockMode: boolean){
    for(const item of this.game.board){
          item.isLocked = lockMode
    }
  }

  /*
  newGame(pairs: number) {
    let indexList = this.playingCardService.getRandomNumbers(pairs);
    indexList = indexList.concat(indexList);
    indexList = this.playingCardService.shuffle(indexList);

    this.game.board = []
    indexList.forEach((item)=>{
      this.game.board.push({
        value: this.cards[item].value,
        symbol: this.cards[item].symbol,
        color: this.cards[item].color,
        isVisible: true,
        id: this.cards[item].value+this.cards[item].symbol+this.cards[item].color
      })
    })

    this.game.pairsFound = 0;
    this.game.pairs = this.game.board.length/2
    this.foundPiece = []

    setTimeout(()=>{
      this.game.board.forEach((item)=>{
        item.isVisible = false;
      })

    },1)
  }*/

}
