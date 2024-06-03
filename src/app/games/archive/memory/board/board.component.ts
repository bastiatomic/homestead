import { Component, Input, EventEmitter, OnInit, Output } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CommonModule } from "@angular/common";
import { Card, CardsService } from '../cards.service';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card'


@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CardComponent,CommonModule, CardComponent, MatButtonModule, MatDividerModule, MatIconModule, MatCardModule],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss'
})
export class BoardComponent{

  cards: Card[] = []
  firstGuess : Card | null = null
  secondGuess : Card | null = null

  @Output() moves_amountChange = new EventEmitter<string>();

  @Input() pairs! : number;

  rows = ""

  constructor(private CardService: CardsService){}

  ngOnChanges(){
    this.newGame()
  }

  newGame(){
    this.cards = this.CardService.newShuffleCards(this.pairs)
    this.incMoveCounter("null");
    this.firstGuess = null; this.secondGuess = null
    this.rows = "repeat(6, 55px)"
  }

  swapDeck(command: string){

    if (command == "hide"){
      this.cards.forEach((a) => {
        a.whatVisible = "x"
      })
    } else {
      this.cards.forEach((a) => {
        a.whatVisible = a.symbol
      })
      
    }
    
  }



  //TODO: make more return to avoid nested if()
  makeMove(index: number){
    var guess: Card = this.cards[index]
    
    if(!this.firstGuess){
      this.firstGuess = guess
      guess.whatVisible = guess.symbol
    }
    else if(this.firstGuess && guess != this.firstGuess){
      this.secondGuess = guess
      guess.whatVisible = guess.symbol
    }

    if(this.firstGuess?.symbol == this.secondGuess?.symbol){
      this.firstGuess = null; this.secondGuess = null
      this.checkVictory()
      this.incMoveCounter("inc")
    } else if(this.secondGuess) {
      this.incMoveCounter("inc")

      // reset if wrong choice
      if(this.firstGuess.symbol != this.secondGuess.symbol){

        setTimeout(() => {
          
          if(this.firstGuess){this.firstGuess.whatVisible = "x"}
          if(this.secondGuess){this.secondGuess.whatVisible = "x"}
          this.firstGuess = null; this.secondGuess = null
          
          },1500);
        }
    
    }

  }
  incMoveCounter(command : string){
    this.moves_amountChange.emit(command);
  }

  checkVictory(){
    if (this.cards.some(element => element.whatVisible === "x")) {
    } else {
        console.log("VICTORY");
        setTimeout(() => {
          this.newGame()
        }, 3000)
    }
}




}



