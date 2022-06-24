import { TestBed } from '@angular/core/testing';

import { ServtiposprodutosService } from './servtiposprodutos.service';

describe('ServtiposprodutosService', () => {
  let service: ServtiposprodutosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServtiposprodutosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
