import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-sudoku',
  standalone: true,
  imports: [CommonModule, MatGridListModule, MatButtonModule],
  templateUrl: './sudoku.component.html',
  styleUrl: './sudoku.component.scss'
})
export class SudokuComponent {

  board : number[] = []
  WIDTH = 600;
  borderRight = [2,11,20,29,38,47,56,65,74,5,14,23,32,41,50,59,68,77];

  ngOnInit(){
    this.board = this.createNewBoard()
  }

  createNewBoard(): number[] {
    let array = Array.from({ length: 81 }, (_) => Math.floor(Math.random() * (10 - 1) + 1));

    //idea: create a random sudoku and then remove numbers.

    array.forEach((_, index)=>{
      if(Math.random()>0.3){
        array[index] = 0
      }
    })

    return array;
    
  }

  getBorderStyle (i : number) : {[key: string]: string} {
    let style : any= {}
    if(i >= 18 && i <= 26 || i>=45 && i<= 53){
      style['border-bottom'] = '4px solid rgb(117, 164, 127)'}
    

    if( (i+1) % 3 == 0){
      if(this.borderRight.includes(i)){
        style['border-right']= '4px solid rgb(117, 164, 127)'}
      }
      
    return style;
  }

}
