import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnoncesEncoursComponent } from './annonces-encours.component';

describe('AnnoncesEncoursComponent', () => {
  let component: AnnoncesEncoursComponent;
  let fixture: ComponentFixture<AnnoncesEncoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnoncesEncoursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnoncesEncoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
