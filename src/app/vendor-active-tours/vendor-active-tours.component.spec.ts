import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorActiveToursComponent } from './vendor-active-tours.component';

describe('VendorActiveToursComponent', () => {
  let component: VendorActiveToursComponent;
  let fixture: ComponentFixture<VendorActiveToursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorActiveToursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorActiveToursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
