import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserregistoComponent } from './userregisto.component';

describe('UserregistoComponent', () => {
  let component: UserregistoComponent;
  let fixture: ComponentFixture<UserregistoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserregistoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserregistoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
