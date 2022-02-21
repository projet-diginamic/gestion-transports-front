import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResaCovoiturageHistoriqueComponent } from './resa-covoiturage-historique.component';

describe('ResaCovoiturageHistoriqueComponent', () => {
  let component: ResaCovoiturageHistoriqueComponent;
  let fixture: ComponentFixture<ResaCovoiturageHistoriqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResaCovoiturageHistoriqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResaCovoiturageHistoriqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
