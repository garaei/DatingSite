import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewNewsComponent } from './adminview-news.component';

describe('AdminviewNewsComponent', () => {
  let component: AdminviewNewsComponent;
  let fixture: ComponentFixture<AdminviewNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminviewNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminviewNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
