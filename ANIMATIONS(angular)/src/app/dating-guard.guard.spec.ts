import { TestBed, async, inject } from '@angular/core/testing';

import { DatingGuardGuard } from './dating-guard.guard';

describe('DatingGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatingGuardGuard]
    });
  });

  it('should ...', inject([DatingGuardGuard], (guard: DatingGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
