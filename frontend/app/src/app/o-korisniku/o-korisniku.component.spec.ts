import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OKorisnikuComponent } from './o-korisniku.component';

describe('OKorisnikuComponent', () => {
  let component: OKorisnikuComponent;
  let fixture: ComponentFixture<OKorisnikuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OKorisnikuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OKorisnikuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
