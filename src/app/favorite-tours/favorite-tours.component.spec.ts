import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteToursComponent } from './favorite-tours.component';

describe('FavoriteToursComponent', () => {
  let component: FavoriteToursComponent;
  let fixture: ComponentFixture<FavoriteToursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoriteToursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteToursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
