import { TestBed } from '@angular/core/testing';

import { TalksService } from './talks.service';

describe('TalksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TalksService = TestBed.get(TalksService);
    expect(service).toBeTruthy();
  });
});
