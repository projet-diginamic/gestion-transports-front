import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitrePageComponentComponent } from './titre-page-component.component';

describe('TitrePageComponentComponent', () => {
  let component: TitrePageComponentComponent;
  let fixture: ComponentFixture<TitrePageComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitrePageComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitrePageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
