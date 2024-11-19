import { TestBed } from '@angular/core/testing';

import { ViewconsumerService } from './viewconsumer.service';

describe('ViewconsumerService', () => {
  let service: ViewconsumerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewconsumerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
