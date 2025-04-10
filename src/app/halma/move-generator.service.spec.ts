import { TestBed } from '@angular/core/testing';

import { MoveGeneratorService } from './move-generator.service';

describe('MoveGeneratorService', () => {
  let service: MoveGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoveGeneratorService);
  });

  it('shold return a specific list of jump moves given a specific board', () => {
    const randomBoard = service.getRandomBoard(2);

    const startIndex = [...randomBoard['occupied']][0];
    const response1 = service.getPossibleMovesByIndex(randomBoard, startIndex);
    const response2 = service.getPossibleMovesByIndex(randomBoard, startIndex);

    const lastElementsSet1 = new Set(
      response1.map((sublist) => sublist[sublist.length - 1])
    );

    const lastElementsSet2 = new Set(
      response2.map((sublist) => sublist[sublist.length - 1])
    );

    expect(lastElementsSet1).toEqual(lastElementsSet2);
  });
});
