import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationsVehiculeComponent } from './reservations-vehicule.component';

describe('ReservationsVehiculeComponent', () => {
  let component: ReservationsVehiculeComponent;
  let fixture: ComponentFixture<ReservationsVehiculeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationsVehiculeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationsVehiculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
