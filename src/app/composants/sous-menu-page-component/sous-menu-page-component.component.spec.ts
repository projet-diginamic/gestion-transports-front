import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SousMenuPageComponentComponent } from './sous-menu-page-component.component';

describe('SousMenuPageComponentComponent', () => {
  let component: SousMenuPageComponentComponent;
  let fixture: ComponentFixture<SousMenuPageComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SousMenuPageComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SousMenuPageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
