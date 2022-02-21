import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationGeneraleComponent } from './navigation-generale.component';

describe('NavigationGeneraleComponentComponent', () => {
  let component: NavigationGeneraleComponent;
  let fixture: ComponentFixture<NavigationGeneraleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationGeneraleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationGeneraleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
