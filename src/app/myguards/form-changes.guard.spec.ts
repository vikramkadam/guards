import { TestBed } from '@angular/core/testing';

import { FormChangesGuard } from './form-changes.guard';

describe('FormChangesGuard', () => {
  let guard: FormChangesGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(FormChangesGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
