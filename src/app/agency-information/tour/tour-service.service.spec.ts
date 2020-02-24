import { TestBed } from '@angular/core/testing';

import { TourServiceService } from './tour-service.service';

describe('TourServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TourServiceService = TestBed.get(TourServiceService);
    expect(service).toBeTruthy();
  });
});
