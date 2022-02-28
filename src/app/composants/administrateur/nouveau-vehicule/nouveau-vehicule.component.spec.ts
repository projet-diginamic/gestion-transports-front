import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauVehiculeComponent } from './nouveau-vehicule.component';

describe('NouveauVehiculeComponent', () => {
  let component: NouveauVehiculeComponent;
  let fixture: ComponentFixture<NouveauVehiculeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouveauVehiculeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NouveauVehiculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
