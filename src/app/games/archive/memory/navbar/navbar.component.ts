import { Component, EventEmitter, Input, Output } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card'

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatIconModule, MatDividerModule, MatButtonModule, MatCardModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  @Input() moves_amount : number = 0; // this value is useless?

  @Output() pairsChange = new EventEmitter<number>();
  @Input() pairs! : number;

  @Output() deckSwapChange = new EventEmitter<string>();

  TIMELEFT_DEFAULT : number = this.pairs * 2
  timeLeft = this.TIMELEFT_DEFAULT
  interval: string | number | NodeJS.Timeout | undefined;

  ngOnInit(){
    this.setupTimer()
  }

  morePairs(a: string){
    if (a == 'add'){
      this.pairsChange.emit(1)
    } else{
      this.pairsChange.emit(-1)
    }
    setTimeout(()=> {
      this.setupTimer()
    },1)

    
  }

  newGame(){}

  deckSwap(command : string){
    this.deckSwapChange.emit(command)
  }

  startTimer() {
    this.deckSwap("show")
      this.interval = setInterval(() => {
        if(this.timeLeft > 0) {
          this.timeLeft--;
        } else {
          this.resetTimer()
          this.deckSwap("hide")
        }
      },1000)
    }

    pauseTimer() {
      clearInterval(this.interval);
    }

    resetTimer(){
      this.timeLeft = this.TIMELEFT_DEFAULT;
      this.pauseTimer()
    }
    setupTimer(){
      this.TIMELEFT_DEFAULT = this.pairs * 2;
      this.timeLeft = this.TIMELEFT_DEFAULT;
    }
 

}
