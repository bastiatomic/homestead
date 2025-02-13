import { Injectable } from '@angular/core';
import { Tile } from './Tile';

@Injectable({
  providedIn: 'root',
})
export class PathfindingService {
  constructor() {}

  //TODO: Try recursion: Should work great with searchRangeLimit & specificTargetOnly:
  //Or use double while loop (one enournmus function!)

  startAgent(
    board: Tile[][],
    startNode: number[],
    searchRangeLimit: number | false = 3,
    specificTargetOnly: string | null = null
  ) {
    console.log('startAgent');

    const objectsFoundFailsafeThreshold = 25;
    let failsafe = 0;
    let solutionFound: boolean = false;

    while (failsafe < objectsFoundFailsafeThreshold && !solutionFound) {
      failsafe += 1;
      let path = this.findNearestObjects(board, startNode);
    }
  }

  findNearestObjects(
    board: Tile[][],
    startNode: number[],
    searchRangeLimit: number | false = 3,
    specificTargetOnly: string | null = null
  ): string[] {
    console.log('findNearestObjects');

    if (searchRangeLimit == false) {
      searchRangeLimit = 1000;
    }

    //find all nodes within 3 walk distance (manhattan distance)
    let frontier: number[][] = [];
    let failsafe: number = 0;
    const failsafeThreshold: number = 100;
    frontier.push(startNode);
    const neighborIndice = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
    ];
    let visitedList = new Set([startNode.toString()]);
    let targets: { [key: string]: Tile } = {};
    let backtrackingMap: { [key: string]: string } = {};

    while (frontier.length > 0 && failsafe < failsafeThreshold) {
      failsafe += 1;

      let currentNode = frontier.shift()!;

      for (let i = 0; i < neighborIndice.length; i++) {
        let neighbor: number[] = [
          currentNode[0] + neighborIndice[i][0],
          currentNode[1] + neighborIndice[i][1],
        ];

        const distance =
          Math.abs(neighbor[0] - startNode[0]) +
          Math.abs(neighbor[1] - startNode[1]);
        if (
          neighbor[0] >= 0 &&
          neighbor[0] < board[0].length &&
          neighbor[1] >= 0 &&
          neighbor[1] < board.length &&
          distance <= searchRangeLimit
        ) {
          let neighborTile: Tile = board[neighbor[0]][neighbor[1]];

          if (neighborTile.visited == false) {
            frontier.push(neighbor);
            neighborTile.visited = true;
            visitedList.add(neighbor.toString());
            backtrackingMap[neighbor.toString()] = (
              currentNode[0] +
              ',' +
              currentNode[1]
            ).toString();

            if (neighborTile.image != '') {
              targets[neighbor.toString()] = neighborTile;
            }
          }
        }
      }
    }

    console.log(targets);
    console.log(backtrackingMap);
    //return [];

    //select best target

    const startIndice: string = '0,0';
    const bestTargetIndice: string = Object.keys(targets)[0];

    // BFS
    let shortestPath: string[] = [];

    let solutionFound = false;
    const backTrackingSafetyThreshold = 10;
    failsafe = 0;

    let currentIndex: string = bestTargetIndice;
    shortestPath.push(bestTargetIndice);

    while (!solutionFound && failsafe < backTrackingSafetyThreshold) {
      failsafe += 1;

      const newParent = backtrackingMap[currentIndex];

      if (!newParent) {
        solutionFound = true;
        break;
      }

      shortestPath.push(newParent);
      currentIndex = newParent;
    }
    shortestPath = shortestPath.reverse();
    console.log(shortestPath);
    return shortestPath;
  }
}
