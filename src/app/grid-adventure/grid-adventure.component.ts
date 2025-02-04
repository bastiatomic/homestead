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

  grid: Tile[][] = Array.from({ length: 8 }, () => Array(8).fill({ image: '' , visited: false}));

  constructor(private pathfindingServive: PathfindingService){}
 
  ngOnInit(){
    this.grid[0][0] = { image: 'cat.png', visited: false };
    this.grid[2][3] = { image: 'DBHamsterApple.png', visited: false };

  }

  findNearestObjects(){
    //have a list of boards to loop through
    const x : Tile[][] = this.pathfindingServive.findNearestObjects(this.grid, [0,0])
  }
}