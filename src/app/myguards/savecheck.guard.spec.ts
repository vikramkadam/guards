import { TestBed } from '@angular/core/testing';

import { SavecheckGuard } from './savecheck.guard';

describe('SavecheckGuard', () => {
  let guard: SavecheckGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SavecheckGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
