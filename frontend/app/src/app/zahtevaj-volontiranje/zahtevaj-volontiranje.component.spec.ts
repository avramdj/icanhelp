import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZahtevajVolontiranjeComponent } from './zahtevaj-volontiranje.component';

describe('ZahtevajVolontiranjeComponent', () => {
  let component: ZahtevajVolontiranjeComponent;
  let fixture: ComponentFixture<ZahtevajVolontiranjeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZahtevajVolontiranjeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZahtevajVolontiranjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
