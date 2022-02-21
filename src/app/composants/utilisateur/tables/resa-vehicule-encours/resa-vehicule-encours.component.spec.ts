import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResaVehiculeEncoursComponent } from './resa-vehicule-encours.component';

describe('ResaVehiculeEncoursComponent', () => {
  let component: ResaVehiculeEncoursComponent;
  let fixture: ComponentFixture<ResaVehiculeEncoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResaVehiculeEncoursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResaVehiculeEncoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
