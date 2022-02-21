import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SousMenuPageComponent } from './sous-menu-page.component';

describe('SousMenuPageComponentComponent', () => {
  let component: SousMenuPageComponent;
  let fixture: ComponentFixture<SousMenuPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SousMenuPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SousMenuPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
