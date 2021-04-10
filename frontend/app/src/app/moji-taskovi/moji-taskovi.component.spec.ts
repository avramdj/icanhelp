import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MojiTaskoviComponent } from './moji-taskovi.component';

describe('MojiTaskoviComponent', () => {
  let component: MojiTaskoviComponent;
  let fixture: ComponentFixture<MojiTaskoviComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MojiTaskoviComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MojiTaskoviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
