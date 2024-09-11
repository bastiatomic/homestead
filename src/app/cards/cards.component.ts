import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Card, Symbol, ValueType } from './CardType';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MinimalismCardComponent } from "./minimalism-card/minimalism-card.component";
import { CardGenService } from '../memory/card-gen.service';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MinimalismCardComponent],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {

  constructor(private playingCardService: CardGenService) {}
  cards : Card[] = []

  ngOnInit(){
    this.cards = this.playingCardService.cardGen(52);
  }

  clickCard(i: number){
    console.log(this.cards[i])
  }

  shuffle(a: Card[]) : Card[]{
    return this.playingCardService.shuffle(a);
  }
  
}
