import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewHisCommentsComponent } from './user-view-his-comments.component';

describe('UserViewHisCommentsComponent', () => {
  let component: UserViewHisCommentsComponent;
  let fixture: ComponentFixture<UserViewHisCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserViewHisCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserViewHisCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
