import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenuPageComponent } from './contenu-page.component';

describe('ContenuPageComponentComponent', () => {
  let component: ContenuPageComponent;
  let fixture: ComponentFixture<ContenuPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenuPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenuPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
