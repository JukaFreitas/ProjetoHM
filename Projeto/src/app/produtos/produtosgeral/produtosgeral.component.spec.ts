import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosgeralComponent } from './produtosgeral.component';

describe('ProdutosgeralComponent', () => {
  let component: ProdutosgeralComponent;
  let fixture: ComponentFixture<ProdutosgeralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutosgeralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutosgeralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
