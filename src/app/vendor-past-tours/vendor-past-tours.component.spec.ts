import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorPastToursComponent } from './vendor-past-tours.component';

describe('VendorPastToursComponent', () => {
  let component: VendorPastToursComponent;
  let fixture: ComponentFixture<VendorPastToursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorPastToursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorPastToursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
