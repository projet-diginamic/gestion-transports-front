import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltreVehiculeComponent } from './filtre-vehicule.component';

describe('FiltreVehiculeComponent', () => {
  let component: FiltreVehiculeComponent;
  let fixture: ComponentFixture<FiltreVehiculeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltreVehiculeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltreVehiculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
