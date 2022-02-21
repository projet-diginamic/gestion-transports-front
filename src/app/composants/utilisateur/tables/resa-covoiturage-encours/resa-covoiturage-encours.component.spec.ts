import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResaCovoiturageEncoursComponent } from './resa-covoiturage-encours.component';

describe('ResaCovoiturageEncoursComponent', () => {
  let component: ResaCovoiturageEncoursComponent;
  let fixture: ComponentFixture<ResaCovoiturageEncoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResaCovoiturageEncoursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResaCovoiturageEncoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
