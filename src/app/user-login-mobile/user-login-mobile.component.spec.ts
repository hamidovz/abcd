import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLoginMobileComponent } from './user-login-mobile.component';

describe('UserLoginMobileComponent', () => {
  let component: UserLoginMobileComponent;
  let fixture: ComponentFixture<UserLoginMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserLoginMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLoginMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
