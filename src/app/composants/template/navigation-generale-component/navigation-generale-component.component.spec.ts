import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationGeneraleComponentComponent } from './navigation-generale-component.component';

describe('NavigationGeneraleComponentComponent', () => {
  let component: NavigationGeneraleComponentComponent;
  let fixture: ComponentFixture<NavigationGeneraleComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationGeneraleComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationGeneraleComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
