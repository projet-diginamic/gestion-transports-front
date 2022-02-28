import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorpsPageComponent } from './corps-page.component';

describe('CorpsPageComponentComponent', () => {
  let component: CorpsPageComponent;
  let fixture: ComponentFixture<CorpsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorpsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorpsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
