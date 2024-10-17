import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Game } from './Game';
import { MatIcon } from '@angular/material/icon';
import { MinimalismCardComponent } from "../cards/minimalism-card/minimalism-card.component";
import { CardGenService } from './card-gen.service';
import { PlayingCards } from '../cards/PlayingCards';

@Component({
  selector: 'app-memory',
  standalone: true,
  imports: [CommonModule, MatGridListModule, MatButtonModule, MatCardModule, MatIcon, MinimalismCardComponent],
  templateUrl: './memory.component.html',
  styleUrl: './memory.component.scss',
})
export class MemoryComponent {

  constructor( private playingCardService : CardGenService) { }
  WIDTH = 4;
  allHidden = false;
  firstChoice: number | null = null;
  game: Game = {board: [], pairs: 8, successRate: -1, pairsFound:0, uuid: "-", boardIndice: []}
  foundPiece : string[] = []
  cards = PlayingCards;

  ngOnInit() {
    this.newGame(this.game.pairs)
  }

  clickTile(index: number) {

    if(this.game.board[index].isLocked){return;}

    this.game.board[index].isVisible = true;

    if (this.firstChoice == null) {
      
      this.firstChoice = index;

    } else {

      //same card twice
      if(this.firstChoice == index){
        this.game.board[index].isVisible=false;
        this.firstChoice = null;
        return;
      }
      
      //reset with timer if not equal
      if(this.game.board[this.firstChoice].id != this.game.board[index].id){
        this.foundPiece.push(this.game.board[index].id)
       
        for(const card of this.game.board){
          card.isLocked = true;
        }

        setTimeout(()=>{
          this.reset();
          this.firstChoice = null;

        },2000)
      }

      //pair found: reset without timer
      else {
        this.firstChoice = null;
        this.game.pairsFound += 1

        if(this.game.pairs == this.game.pairsFound){
          this.newGame(this.game.pairs)
        }
      }
      
    }

  }
  reset(){
    for(const card of this.game.board){
      card.isLocked = false;
      card.isVisible = false;
     }
  }

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
  }

  changeCardAmount(a: number){
    this.game.pairs += a;
    this.newGame(this.game.pairs)
  }
  
}
