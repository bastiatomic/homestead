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
  youKnowMe : boolean = false;
  mistakes : number = 0
  cards = PlayingCards;

  ngOnInit() {
    this.newGame(this.game.pairs)
  }

  clickTile(index: number) {
    this.game.board[index].isVisible = true;

    if (this.firstChoice == null) {
      
      this.firstChoice = index;

    } else {
      
      //reset with timer if not equal
      if(this.game.board[this.firstChoice].id != this.game.board[index].id){
        this.foundPiece.push(this.game.board[index].id)

        if(this.youKnowMe == true){
          //I should have known it, but didnt
          console.log("I should have known it, but didnt")
          this.mistakes += 1
        }

        setTimeout(()=>{
          this.game.board[this.firstChoice!].isVisible = false;
          this.game.board[index].isVisible = false;
          this.firstChoice = null;

          this.youKnowMe = false
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
        isVisible: false,
        id: this.cards[item].value+this.cards[item].symbol+this.cards[item].color
      })
    })

    this.game.pairsFound = 0;
    this.game.pairs = this.game.board.length/2
    this.foundPiece = []
    this.mistakes = 0;
  }

  changeCardAmount(a: number){
    this.game.pairs += a;
    this.newGame(this.game.pairs)
  }
  
}
