import { TestBed } from '@angular/core/testing';

import { MoveGeneratorService } from './move-generator.service';
import { BoardState } from './Interfaces';

describe('MoveGeneratorService', () => {
  let service: MoveGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoveGeneratorService);
  });

  it('shold return a specific list of jump moves given a specific board', () => {
    const startIndex = 5;
    const expectedJumps = [
      [5, 16],
      [5, 16, 3],
      [5, 16, 41],
      [5, 16, 3, 14],
      [5, 16, 41, 43],
      [5, 16, 41, 60],
      [5, 4],
      [5, 9],
    ];

    const initBoard = service.initBoardByBoardState();
    const response = service.generateEligibleMovesByIndex(
      initBoard,
      startIndex
    );
    expect(response).toEqual(expectedJumps);
  });

  it('the BoardState "occupied" should contain all of the single playerId`s indice', () => {
    let a: BoardState = {
      1: new Set([1, 2, 3, 4]),
      2: new Set([5, 6, 7, 8]),
      3: new Set(),
      4: new Set(),
      5: new Set(),
      6: new Set(),
      occupied: new Set([1, 2, 3, 4, 5, 6, 7, 8]),
    };

    const expectedResponse = service.getOccupiedByPlayerId(a, 1);

    console.log(expectedResponse);
  });
});
