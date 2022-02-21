import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenuPageComponentComponent } from './contenu-page-component.component';

describe('ContenuPageComponentComponent', () => {
  let component: ContenuPageComponentComponent;
  let fixture: ComponentFixture<ContenuPageComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenuPageComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenuPageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
