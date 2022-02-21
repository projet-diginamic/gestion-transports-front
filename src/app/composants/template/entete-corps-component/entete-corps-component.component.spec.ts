import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnteteCorpsComponentComponent } from './entete-corps-component.component';

describe('EnteteCorpsComponentComponent', () => {
  let component: EnteteCorpsComponentComponent;
  let fixture: ComponentFixture<EnteteCorpsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnteteCorpsComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnteteCorpsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
