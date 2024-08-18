import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { PLANTS_LIST } from '../../assets/anno-1800-plants/plants';
import { Card } from './Card';
import { Game } from './Game';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-memory',
  standalone: true,
  imports: [CommonModule, MatGridListModule, MatButtonModule, MatCardModule,MatIcon],
  templateUrl: './memory.component.html',
  styleUrl: './memory.component.scss',
})
export class MemoryComponent {
  WIDTH = 4;
  allHidden = false;
  firstChoice: number | null = null;
  game: Game = {board: [], pairs: 8, successRate: -1, pairsFound:0, uuid: "-"}
  foundPiece : string[] = []
  youKnowMe : boolean = false;
  mistakes : number = 0

  ngOnInit() {
    this.newGame(this.game.pairs)
  }

  newDeck(lengthRequirement: number): Card[] {
    let plantsLength = PLANTS_LIST.length - 1;
    let indiceUsed: number[] = [];
    let cardList: Card[] = [];

    //this can be optimized to just one sort function
    for (let i = 0; i < lengthRequirement; i++) {
      let randomIndex = Math.floor(Math.random() * plantsLength);

      //shuffle again if indice was found, reduces collision chance to 0,003
      if (indiceUsed.includes(randomIndex)) {
        randomIndex = Math.floor(Math.random() * plantsLength);
      } else {
        indiceUsed.push(randomIndex);
      }

      cardList.push({ element: PLANTS_LIST[randomIndex], isVisible: false });
      cardList.push({ element: PLANTS_LIST[randomIndex], isVisible: false });
    }

    cardList.sort(() => 0.5 - Math.random());
    return cardList;
  }

  clickTile(index: number) {
    this.game.board[index].isVisible = true;
    if (this.firstChoice == null) {
      
      this.firstChoice = index;

      if(this.foundPiece.includes(this.game.board[index].element)){
        //known element
        this.youKnowMe = true;
      } else{
        this.foundPiece.push(this.game.board[index].element)
      }

    } else {
      

      //reset with timer if not equal
      if(this.game.board[this.firstChoice].element != this.game.board[index].element){
        this.foundPiece.push(this.game.board[index].element)

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
      
      console.log(this.foundPiece)
    }
  }
  newGame(pairs: number){
    this.game.board = this.newDeck(pairs);
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
