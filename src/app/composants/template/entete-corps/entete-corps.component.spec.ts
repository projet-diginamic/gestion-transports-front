import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnteteCorpsComponent } from './entete-corps.component';

describe('EnteteCorpsComponentComponent', () => {
  let component: EnteteCorpsComponent;
  let fixture: ComponentFixture<EnteteCorpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnteteCorpsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnteteCorpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
