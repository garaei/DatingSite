import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewAllCommentsComponent } from './user-view-all-comments.component';

describe('UserViewAllCommentsComponent', () => {
  let component: UserViewAllCommentsComponent;
  let fixture: ComponentFixture<UserViewAllCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserViewAllCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserViewAllCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
