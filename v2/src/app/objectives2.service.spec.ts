import { TestBed } from '@angular/core/testing';

import { Objectives2Service } from './objectives2.service';

describe('Objectives2Service', () => {
  let service: Objectives2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Objectives2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
