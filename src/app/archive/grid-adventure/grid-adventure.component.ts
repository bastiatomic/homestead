import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tile } from './Tile';
import { PathfindingService } from './pathfinding.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-grid-adventure',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './grid-adventure.component.html',
  styleUrl: './grid-adventure.component.scss'
})
export class GridAdventureComponent {

  grid: Tile[][] = Array.from({ length: 8 }, () => Array.from({ length: 8 }, () => ({ image: '', visited: false }))
);

  constructor(private pathfindingServive: PathfindingService){}
 
  ngOnInit(){
    this.grid[0][0] = { image: 'drone_2482764.png', visited: true, rotation: 0 };
    this.grid[2][1] = { image: 'DBHamsterApple.png', visited: false };
    this.grid[4][0] = { image: 'DBHamsterFlower.png', visited: false };
    this.grid[4][2] = { image: 'DBHamsterTreeStump.png', visited: false };
    this.grid[7][2] = { image: 'DBHamsterSandbox.png', visited: false };
    this.grid[2][6] = { image: 'DBHamsterPool.png', visited: false };
    this.grid[1][6] = { image: 'DBHamsterBlock.png', visited: true }; //true prevents them from ever being visited
  }

  findNearestObjects(){
    //have a list of boards to loop through
    //this.grid[0][0].rotation = Math.floor(Math.random()*90)
    let shorestPath: string[] = this.pathfindingServive.findNearestObjects(JSON.parse(JSON.stringify(this.grid)), [0,0], 3)
    //console.log(shorestPath)
    this.moveDrone(shorestPath, 0, [0,0])

  }

  moveDrone(path: string[], index: number, currentDroneIndex: number[]){
    if(index > path.length-1){
      return
    }

    this.grid[currentDroneIndex[0]][currentDroneIndex[1]].image = ''

    let x = Number(path[index][0])
    let y = Number(path[index][2])
    this.grid[x][y].image = 'drone_2482764.png'
    setTimeout(()=>{
      this.moveDrone(path, index+1, [x,y])
      console.log("moveDrone", index)
    },1000)
    
  }

}