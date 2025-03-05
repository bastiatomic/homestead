import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { pixelLocations } from './PixelLocations';
import { MoveGeneratorService } from './move-generator.service';
import { indexToString } from './IndexToString';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app0,halma',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './halma.component.html',
  styleUrl: './halma.component.scss',
})
export class HalmaComponent {
  //TODO: the key of each NeighborMarbles is a x,y coordinate useful to draw the marbles later

  marbleStyle: { [key: string]: any } = {};
  board = Array.from({ length: 121 }, (_) => 0);

  agentColorMapping: { [key: number]: string } = {
    1: 'rgb(255, 179, 186)', // Pastel Red
    2: 'rgb(179, 205, 224)', // Pastel Blue
    3: 'rgb(186, 255, 201)', // Pastel Green
    4: 'rgb(255, 255, 186)', // Pastel Yellow
    5: 'rgb(218, 179, 255)', // Pastel Purple
    6: 'rgb(255, 204, 153)', // Pastel Orange
  };

  indexToString = indexToString;

  constructor(private readonly moveGenerator: MoveGeneratorService) {}

  ngOnInit() {
    this.marbleStyle = pixelLocations;
    this.initAgentColors();
  }

  getNeighbors(index: number, playerId: number) {
    //console.log(neighborMarbles[index]);
    const eligibleMoves = this.moveGenerator.generateEligibleMovesById(
      this.board,
      index,
      playerId
    );

    //this.playMoves(eligibleMoves[eligibleMoves.length - 1], playerId, 0);
  }

  initAgentColors() {
    this.board = this.moveGenerator.initBoard(this.board);
  }

  playMoves(moves: number[], playerId: number, depth: number = 0) {
    setTimeout(() => {
      if (depth + 1 >= moves.length) {
        return;
      }
      this.board[moves[depth]] = 0;
      this.board[moves[depth + 1]] = playerId;
      this.playMoves(moves, playerId, depth + 1);
    }, 750);
  }
}
