import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserviewhelpResponseComponent } from './userviewhelp-response.component';

describe('UserviewhelpResponseComponent', () => {
  let component: UserviewhelpResponseComponent;
  let fixture: ComponentFixture<UserviewhelpResponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserviewhelpResponseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserviewhelpResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
