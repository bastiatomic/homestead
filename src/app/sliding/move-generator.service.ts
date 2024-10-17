import { Injectable } from '@angular/core';
import { BoardMap } from './BoardMap';

@Injectable({
  providedIn: 'root',
})
export class MoveGeneratorService {
  moveBlock(boardMap: BoardMap, blockId: number, direction: number): BoardMap {
    const indiceToBeMoved = boardMap[blockId];
    const expectedNewIndice = indiceToBeMoved.map(
      (number) => number + direction
    );

    for (const indice of expectedNewIndice) {
      if (
        !boardMap[0].includes(indice) &&
        !boardMap[blockId].includes(indice)
      ) {
        return boardMap; //return boardmap with no changes and notifications
      }
    }
    //moving is possible, continue
    boardMap[blockId] = expectedNewIndice;

    for (const item1 of expectedNewIndice) {
      boardMap[0] = boardMap[0].filter((item) => item !== item1);
      boardMap[0].push(item1 - direction);
    }
    return boardMap;
  }

  bfs(boardMap: BoardMap): BoardMap {
    return boardMap;
  }
}
