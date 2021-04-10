import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolontirajComponent } from './volontiraj.component';

describe('VolontirajComponent', () => {
  let component: VolontirajComponent;
  let fixture: ComponentFixture<VolontirajComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolontirajComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VolontirajComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
