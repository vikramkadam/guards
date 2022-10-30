import { TestBed } from '@angular/core/testing';

import { CommonfeaturesService } from './commonfeatures.service';

describe('CommonfeaturesService', () => {
  let service: CommonfeaturesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonfeaturesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
