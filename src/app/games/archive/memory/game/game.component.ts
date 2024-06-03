import { Component, ViewChild } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { BoardComponent } from '../board/board.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-game',
  standalone: true,
  styleUrl: './game.component.scss',
  imports: [NavbarComponent, BoardComponent, FormsModule],
  template: `
    <div class="grid">

      <app-board #childComponent
      [pairs]="pairs"
      (moves_amountChange)="onNewMoveCommand($event)"
      ></app-board>

      <app-navbar
      [pairs]="pairs"
      (pairsChange)="onPairChange($event)"
      [moves_amount]="moves_amount"
      (deckSwapChange)="onDeckSwapChange($event)">
      </app-navbar>

    </div>
  `,
})

export class GameComponent {
  //I store all the values assocciated with one game and emit/send them to their components

  @ViewChild('childComponent', { static: false }) childComponent!: BoardComponent;
  pairs: number = 18; // init number
  moves_amount: number = 0;
  deckSwapFactor : string = "show"

  onPairChange(a: number) {
    this.pairs += a;
  }

  onNewMoveCommand(command: string) {
    switch (command) {
      case 'null':
        this.moves_amount = 0;
        break;
      case 'inc':
        this.moves_amount += 1;
        break;
      case 'dec':
        this.moves_amount -= 1;
        break;
    }
  }
  onDeckSwapChange(command: string){
    this.deckSwapFactor = command;
    this.childComponent.swapDeck(command)
  }
}
