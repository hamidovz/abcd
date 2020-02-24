import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleTourPageComponent } from './single-tour-page.component';

describe('SingleTourPageComponent', () => {
  let component: SingleTourPageComponent;
  let fixture: ComponentFixture<SingleTourPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleTourPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleTourPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
