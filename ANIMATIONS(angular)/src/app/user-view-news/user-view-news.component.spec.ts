import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewNewsComponent } from './user-view-news.component';

describe('UserViewNewsComponent', () => {
  let component: UserViewNewsComponent;
  let fixture: ComponentFixture<UserViewNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserViewNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserViewNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
