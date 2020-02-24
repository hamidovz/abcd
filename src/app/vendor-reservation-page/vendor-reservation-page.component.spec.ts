import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorReservationPageComponent } from './vendor-reservation-page.component';

describe('VendorReservationPageComponent', () => {
  let component: VendorReservationPageComponent;
  let fixture: ComponentFixture<VendorReservationPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorReservationPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorReservationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
