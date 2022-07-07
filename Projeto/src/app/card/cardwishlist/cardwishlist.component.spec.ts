import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardwishlistComponent } from './cardwishlist.component';

describe('CardwishlistComponent', () => {
  let component: CardwishlistComponent;
  let fixture: ComponentFixture<CardwishlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardwishlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardwishlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
