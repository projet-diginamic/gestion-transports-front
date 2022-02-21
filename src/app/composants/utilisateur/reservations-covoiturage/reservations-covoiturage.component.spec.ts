import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationsCovoiturageComponent } from './reservations-covoiturage.component';

describe('ReservationsCovoiturageComponent', () => {
  let component: ReservationsCovoiturageComponent;
  let fixture: ComponentFixture<ReservationsCovoiturageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationsCovoiturageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationsCovoiturageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
