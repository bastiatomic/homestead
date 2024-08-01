import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { PLANTS_LIST } from '../../assets/anno-1800-plants/plants';
import { Card } from './Card';
import { Game } from './Game';

@Component({
  selector: 'app-memory',
  standalone: true,
  imports: [CommonModule, MatGridListModule, MatButtonModule, MatCardModule],
  templateUrl: './memory.component.html',
  styleUrl: './memory.component.scss',
})
export class MemoryComponent {
  WIDTH = 4;
  allHidden = false;
  localBoard: Card[] = [];
  firstChoice: number | null = null;
  game: Game = {board: [], pairs: -1, timePlayed: -1, successRate: -1, pairsFound:0}

  ngOnInit() {
    this.newGame()
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
    this.localBoard[index].isVisible = true;
    if (this.firstChoice == null) {
      
      this.firstChoice = index;
    } else {

      //reset with timer if not equal
      if(this.localBoard[this.firstChoice].element != this.localBoard[index].element){
        console.log("FALSE")
        setTimeout(()=>{
          this.localBoard[this.firstChoice!].isVisible = false;
          this.localBoard[index].isVisible = false;
          this.firstChoice = null;
        },2000)
      }

      //pair found: reset without timer
      else {
        console.log("TRUE")
        this.firstChoice = null;
        this.game.pairsFound += 1

        if(this.game.pairs == this.game.pairsFound){
          console.log("SUCCESS")
          this.newGame()
        }
      }

    }
  }
  newGame(){
    this.localBoard = this.newDeck(Math.pow(this.WIDTH, 2) / 2);
    this.game.board = this.localBoard;
    this.game.pairs = this.game.board.length/2
  }
}
