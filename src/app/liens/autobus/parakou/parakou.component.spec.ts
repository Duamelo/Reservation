import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParakouComponent } from './parakou.component';

describe('ParakouComponent', () => {
  let component: ParakouComponent;
  let fixture: ComponentFixture<ParakouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParakouComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParakouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
