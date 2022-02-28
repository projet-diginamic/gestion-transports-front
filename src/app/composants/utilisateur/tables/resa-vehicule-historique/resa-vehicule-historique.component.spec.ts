import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResaVehiculeHistoriqueComponent } from './resa-vehicule-historique.component';

describe('ResaVehiculeHistoriqueComponent', () => {
  let component: ResaVehiculeHistoriqueComponent;
  let fixture: ComponentFixture<ResaVehiculeHistoriqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResaVehiculeHistoriqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResaVehiculeHistoriqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
