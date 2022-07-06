import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsereditarComponent } from './usereditar.component';

describe('UsereditarComponent', () => {
  let component: UsereditarComponent;
  let fixture: ComponentFixture<UsereditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsereditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsereditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
