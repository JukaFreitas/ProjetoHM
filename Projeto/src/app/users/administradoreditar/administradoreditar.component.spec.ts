import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministradoreditarComponent } from './administradoreditar.component';

describe('AdministradoreditarComponent', () => {
  let component: AdministradoreditarComponent;
  let fixture: ComponentFixture<AdministradoreditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministradoreditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministradoreditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
