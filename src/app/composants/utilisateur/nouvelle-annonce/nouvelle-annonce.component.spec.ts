import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelleAnnonceComponent } from './nouvelle-annonce.component';

describe('NouvelleAnnonceComponent', () => {
  let component: NouvelleAnnonceComponent;
  let fixture: ComponentFixture<NouvelleAnnonceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouvelleAnnonceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NouvelleAnnonceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
