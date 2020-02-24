import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourAgencyComponent } from './tour-agency.component';

describe('TourAgencyComponent', () => {
  let component: TourAgencyComponent;
  let fixture: ComponentFixture<TourAgencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourAgencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourAgencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
