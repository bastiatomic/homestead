import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CardGenService } from './card-gen.service';
import { PLANTS_LIST } from '../../assets/anno-1800-plants/plants';
import { CardType } from './CardType';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AscendingNumbersService } from './ascending-numbers.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-memory',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
  ],
  templateUrl: './memory.component.html',
  styleUrl: './memory.component.scss',
})
export class MemoryComponent {
  private _snackBar = inject(MatSnackBar);

  constructor(
    private playingCardService: CardGenService,
    private ascendingNumbersService: AscendingNumbersService
  ) {}
  firstChoice: number | null = null;
  board: CardType[] = [];
  pairs: number = 2;
  isLocked: boolean = false;
  gridTemplateRows: number = 4;
  cardIconList = PLANTS_LIST;
  iconPath = 'anno-1800-plants';

  ascendingNumbersCounter: number = 0;

  gameModes = ['ascending numbers', 'memory'];
  gameMode: string = this.gameModes[0];

  ngOnInit() {
    this.newBoard(this.pairs, this.gameModes[0]);
  }

  newBoard(lengthRequirement: number, gameMode: string): void {
    switch (gameMode) {
      case 'ascending numbers': {
        this.newAscendingNumbersGame(this.pairs);
        break;
      }
      case 'memory': {
        this.board = this.playingCardService.newBoard(lengthRequirement);
        break;
      }
    }
  }

  clickTile(index: number): void {
    //handle ascending numbers clicks
    switch (this.gameMode) {
      case 'ascending numbers': {
        let tile: CardType = this.board[index];

        const difference: number =
          Number(tile.element) - this.ascendingNumbersCounter;

        if (difference != 1) {
          //error: reset
          this.newAscendingNumbersGame(this.pairs);
          this.openSnackBar('Wrong!');
        } else {
          //success: continue
          this.ascendingNumbersCounter += 1;
          tile.isVisible = true;
          if (this.ascendingNumbersCounter == this.pairs * 2) {
            //victory, continue
            this.changeCardAmount(1);
            this.openSnackBar('Success! Next step...');
          }
        }
        break;
      }
      case 'memory': {
        const TIMEOUT_DELAY: number = 2000; //delay after click in ms
        if (this.isLocked || this.board[index].isVisible) {
          return;
        }

        let tile: CardType = this.board[index];

        tile.isVisible = true;

        if (this.firstChoice === null) {
          this.firstChoice = index;
        } else {
          let secondTile = this.board[this.firstChoice];
          //reset if not equal
          if (secondTile.element != tile.element) {
            this.isLocked = true;
            setTimeout(() => {
              secondTile.isVisible = false;
              tile.isVisible = false;
              this.isLocked = false;
            }, TIMEOUT_DELAY);
          }

          this.firstChoice = null;
        }
        break;
      }
    }
  }

  changeCardAmount(a: number): void {
    //TODO: Don't re-render the board, just add/remove a pair and re-shuffle
    this.pairs += a;
    this.newBoard(this.pairs, this.gameMode);
    this.gridTemplateRows = Math.ceil((this.pairs * 2) / 4);
  }

  onOff() {
    for (const item of this.board) {
      item.isVisible = !item.isVisible;
    }
  }
  onModeChange(a: any) {
    console.log(a.value);
    this.gameMode = a.value;
    if (a.value == 'ascending numbers') {
      this.newAscendingNumbersGame(this.pairs);
    } else{
      this.newBoard(this.pairs, "memory")
    }
  }

  newAscendingNumbersGame(pairs: number) {
    this.ascendingNumbersCounter = 0;
    this.board = this.ascendingNumbersService.start(pairs * 2);
  }

  openSnackBar(message: string, action: string = 'Ok') {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
