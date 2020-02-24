import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendedToursComponent } from './attended-tours.component';

describe('AttendedToursComponent', () => {
  let component: AttendedToursComponent;
  let fixture: ComponentFixture<AttendedToursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendedToursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendedToursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
