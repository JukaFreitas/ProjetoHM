import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposprodutoComponent } from './tiposproduto.component';

describe('TiposprodutoComponent', () => {
  let component: TiposprodutoComponent;
  let fixture: ComponentFixture<TiposprodutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiposprodutoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TiposprodutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
