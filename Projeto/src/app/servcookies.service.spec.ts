import { TestBed } from '@angular/core/testing';

import { ServcookiesService } from './servcookies.service';

describe('ServcookiesService', () => {
  let service: ServcookiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServcookiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
