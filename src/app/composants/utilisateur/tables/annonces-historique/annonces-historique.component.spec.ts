import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnoncesHistoriqueComponent } from './annonces-historique.component';

describe('AnnoncesHistoriqueComponent', () => {
  let component: AnnoncesHistoriqueComponent;
  let fixture: ComponentFixture<AnnoncesHistoriqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnoncesHistoriqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnoncesHistoriqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
