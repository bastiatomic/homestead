import { Injectable } from '@angular/core';
import { Tile } from './Tile';

@Injectable({
  providedIn: 'root'
})
export class PathfindingService {

  constructor() { }

  findNearestObjects(board: Tile[][], startNode: number[]) : Tile[][]{
    console.log("findNearestObjects")

    //find all nodes within 3 walk distance (manhattan distance)
    let frontier: any[] = []
    let failsafe: number = 0;
    const failsafeThreshold : number = 2;
    frontier.push(startNode);
    const neighborIndice = [[0,1],[0,-1],[1,0],[-1,0]];
    let visitedList : {[key: string]: string}= {}

    //winningCondition: find a .image != ''

    while (frontier.length > 0 && failsafe < failsafeThreshold){
      failsafe+=1

      let currentNode = frontier.shift();
      //get all 4 neighbors of the current node
      for(let i = 0; i < neighborIndice.length; i++){
        let neighbor : number[]= [currentNode[0] + neighborIndice[i][0], currentNode[1] + neighborIndice[i][1]];
        //check if the neighbor is within the board
        if(neighbor[0] >= 0 && neighbor[0] < board[0].length && neighbor[1] >= 0 && neighbor[1] < board.length){
          let neighborTile = board[neighbor[0]][neighbor[1]];
          console.log(neighbor, neighborTile.image, neighborTile.visited)

          //check if the neighbor is not a wall
          if(neighborTile.image != 'FEATURE_TODO'){
            //check if the neighbor has not been visited
            if(neighborTile.visited == false){
              //check if the neighbor is the winning condition
              if(neighborTile.image == 'DBHamsterApple.png'){
                return this.backTracking(startNode, [currentNode[0] + neighborIndice[i][0], currentNode[1] + neighborIndice[i][1]], visitedList);
              }
              //mark the neighbor as visited
              neighborTile.visited = true;
              
              //visitedList[neighbor.toString()] = currentNode.toString();

              //add the neighbor to the frontier
              frontier.push(neighbor);
            }
          }
        }
      }


    }
    console.log(frontier)

    return [];
  }

  backTracking(startId: number[], endId: number[], visitedList: {}): Tile[][]{
    console.log(startId, endId, visitedList);

    // a list of Boards
    let path: Tile[][][] = [];



    return [];
  }
}
