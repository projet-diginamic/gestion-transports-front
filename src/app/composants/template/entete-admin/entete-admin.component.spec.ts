import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnteteAdminComponent } from './entete-admin.component';

describe('EnteteAdminComponent', () => {
  let component: EnteteAdminComponent;
  let fixture: ComponentFixture<EnteteAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnteteAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnteteAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
