import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewCommentsComponent } from './adminview-comments.component';

describe('AdminviewCommentsComponent', () => {
  let component: AdminviewCommentsComponent;
  let fixture: ComponentFixture<AdminviewCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminviewCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminviewCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
