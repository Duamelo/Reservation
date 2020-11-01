import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NatitingouComponent } from './natitingou.component';

describe('NatitingouComponent', () => {
  let component: NatitingouComponent;
  let fixture: ComponentFixture<NatitingouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NatitingouComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NatitingouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
