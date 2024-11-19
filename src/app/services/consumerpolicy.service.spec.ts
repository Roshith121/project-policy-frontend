import { TestBed } from '@angular/core/testing';

import { ConsumerpolicyService } from './consumerpolicy.service';

describe('ConsumerpolicyService', () => {
  let service: ConsumerpolicyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsumerpolicyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
