import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorTourAddComponent } from './vendor-tour-add.component';

describe('VendorTourAddComponent', () => {
  let component: VendorTourAddComponent;
  let fixture: ComponentFixture<VendorTourAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorTourAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorTourAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
