import { TestBed } from '@angular/core/testing';

import { MoveGeneratorService } from './move-generator.service';
import { BoardState } from './Interfaces';
import { initialBoard } from './BoardStates';

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

    const initBoard = initialBoard;
    const response = service.generateEligibleMovesByIndex(
      initBoard,
      startIndex
    );

    console.log(response);

    expect(response).toEqual(expectedJumps);
  });
});
