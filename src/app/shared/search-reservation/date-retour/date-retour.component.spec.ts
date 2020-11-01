import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateRetourComponent } from './date-retour.component';

describe('DateRetourComponent', () => {
  let component: DateRetourComponent;
  let fixture: ComponentFixture<DateRetourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateRetourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateRetourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
