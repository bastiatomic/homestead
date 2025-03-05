import { TestBed } from '@angular/core/testing';

import { MoveGeneratorService } from './move-generator.service';

describe('MoveGeneratorService', () => {
  let service: MoveGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoveGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('shold return a specific list of jump moves given a specific board', () => {
    const startIndex = 32;
    const expectedJumps = [
      [32, 31],
      [32, 43],
    ];

    const initBoard = service.initBoard(Array.from({ length: 121 }, (_) => 0));
    const response = service.generateEligibleMovesById(
      initBoard,
      startIndex,
      1
    );
    expect(response).toEqual(expectedJumps);
  });
});
