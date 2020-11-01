import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalaviComponent } from './calavi.component';

describe('CalaviComponent', () => {
  let component: CalaviComponent;
  let fixture: ComponentFixture<CalaviComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalaviComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalaviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
