import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalToursComponent } from './internal-tours.component';

describe('InternalToursComponent', () => {
  let component: InternalToursComponent;
  let fixture: ComponentFixture<InternalToursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternalToursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalToursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
