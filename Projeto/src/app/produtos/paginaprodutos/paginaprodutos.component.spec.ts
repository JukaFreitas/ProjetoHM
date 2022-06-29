import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaprodutosComponent } from './paginaprodutos.component';

describe('PaginaprodutosComponent', () => {
  let component: PaginaprodutosComponent;
  let fixture: ComponentFixture<PaginaprodutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaprodutosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaprodutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
