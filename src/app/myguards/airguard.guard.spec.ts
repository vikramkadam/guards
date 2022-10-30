import { TestBed } from '@angular/core/testing';

import { AirguardGuard } from './airguard.guard';

describe('AirguardGuard', () => {
  let guard: AirguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AirguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
