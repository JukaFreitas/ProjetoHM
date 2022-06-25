import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserautenticacaoComponent } from './userautenticacao.component';

describe('UserautenticacaoComponent', () => {
  let component: UserautenticacaoComponent;
  let fixture: ComponentFixture<UserautenticacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserautenticacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserautenticacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
