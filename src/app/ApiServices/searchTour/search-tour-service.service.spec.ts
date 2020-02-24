import { TestBed } from '@angular/core/testing';

import { SearchTourServiceService } from './search-tour-service.service';

describe('SearchTourServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchTourServiceService = TestBed.get(SearchTourServiceService);
    expect(service).toBeTruthy();
  });
});
