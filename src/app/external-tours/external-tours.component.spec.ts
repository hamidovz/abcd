import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalToursComponent } from './external-tours.component';

describe('ExternalToursComponent', () => {
  let component: ExternalToursComponent;
  let fixture: ComponentFixture<ExternalToursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExternalToursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternalToursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
