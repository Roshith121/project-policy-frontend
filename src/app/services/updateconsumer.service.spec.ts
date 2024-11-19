import { TestBed } from '@angular/core/testing';

import { UpdateconsumerService } from './updateconsumer.service';

describe('UpdateconsumerService', () => {
  let service: UpdateconsumerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateconsumerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
