import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeCommunesFranceComponent } from './liste-communes-france.component';

describe('ListeCommunesFranceComponent', () => {
  let component: ListeCommunesFranceComponent;
  let fixture: ComponentFixture<ListeCommunesFranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeCommunesFranceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeCommunesFranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
