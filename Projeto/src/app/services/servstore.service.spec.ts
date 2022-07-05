import { TestBed } from '@angular/core/testing';

import { ServstoreService } from './servstore.service';

describe('ServstoreService', () => {
  let service: ServstoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServstoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
