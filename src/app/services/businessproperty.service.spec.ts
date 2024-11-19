import { TestBed } from '@angular/core/testing';

import { BusinesspropertyService } from './businessproperty.service';

describe('BusinesspropertyService', () => {
  let service: BusinesspropertyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusinesspropertyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
