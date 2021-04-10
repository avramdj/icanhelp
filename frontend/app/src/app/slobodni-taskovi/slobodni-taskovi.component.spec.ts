import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlobodniTaskoviComponent } from './slobodni-taskovi.component';

describe('SlobodniTaskoviComponent', () => {
  let component: SlobodniTaskoviComponent;
  let fixture: ComponentFixture<SlobodniTaskoviComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlobodniTaskoviComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlobodniTaskoviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
