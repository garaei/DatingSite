import { TestBed } from '@angular/core/testing';

import { NewsAndUpdatesService } from './news-and-updates.service';

describe('NewsAndUpdatesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewsAndUpdatesService = TestBed.get(NewsAndUpdatesService);
    expect(service).toBeTruthy();
  });
});
