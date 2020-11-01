import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OuidahComponent } from './ouidah.component';

describe('OuidahComponent', () => {
  let component: OuidahComponent;
  let fixture: ComponentFixture<OuidahComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OuidahComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OuidahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
