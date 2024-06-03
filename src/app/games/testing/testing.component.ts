import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { PLANTS_LIST } from '../../../assets/anno-1800-plants/plants';
import { Card } from './Card';

@Component({
  selector: 'app-testing',
  standalone: true,
  imports: [CommonModule, MatGridListModule, MatButtonModule],
  templateUrl: './testing.component.html',
  styleUrl: './testing.component.scss',
})
export class TestingComponent {
  WIDTH = 4;
  allHidden = false;
  localBoard: Card[] = [];
  firstChoice: number | null = null;

  ngOnInit() {
    this.localBoard = this.newDeck(Math.pow(this.WIDTH, 2) / 2);
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
    if (this.firstChoice == null) {
      this.localBoard[index].isVisible = true;
      this.firstChoice = index;
    } else {
      this.localBoard[index].isVisible = true;

      //reset if not equal
      if(this.localBoard[this.firstChoice!].element != this.localBoard[index].element){
        console.log("FALSE")
        setTimeout(()=>{
          this.localBoard[this.firstChoice!].isVisible = false;
          this.localBoard[index].isVisible = false;
          this.firstChoice = null;
        },2000)
      }
      else {
        console.log("TRUE")
        this.firstChoice = null;
      }

    }
  }
}
