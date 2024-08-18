import { TestBed } from '@angular/core/testing';

import { LegalMovesService } from './legal-moves.service';

describe('LegalMovesService', () => {
  let service: LegalMovesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LegalMovesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
