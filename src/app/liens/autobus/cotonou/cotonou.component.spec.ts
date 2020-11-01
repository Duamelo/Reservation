import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CotonouComponent } from './cotonou.component';

describe('CotonouComponent', () => {
  let component: CotonouComponent;
  let fixture: ComponentFixture<CotonouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CotonouComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CotonouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
