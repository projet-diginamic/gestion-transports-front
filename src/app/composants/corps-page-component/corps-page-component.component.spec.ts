import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorpsPageComponentComponent } from './corps-page-component.component';

describe('CorpsPageComponentComponent', () => {
  let component: CorpsPageComponentComponent;
  let fixture: ComponentFixture<CorpsPageComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorpsPageComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorpsPageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
