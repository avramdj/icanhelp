import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreuzetiTaskoviComponent } from './preuzeti-taskovi.component';

describe('PreuzetiTaskoviComponent', () => {
  let component: PreuzetiTaskoviComponent;
  let fixture: ComponentFixture<PreuzetiTaskoviComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreuzetiTaskoviComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreuzetiTaskoviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
