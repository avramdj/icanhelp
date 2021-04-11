import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MojiZahtevaniComponent } from './moji-zahtevani.component';

describe('MojiZahtevaniComponent', () => {
  let component: MojiZahtevaniComponent;
  let fixture: ComponentFixture<MojiZahtevaniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MojiZahtevaniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MojiZahtevaniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
