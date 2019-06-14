import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewhelpComponent } from './adminviewhelp.component';

describe('AdminviewhelpComponent', () => {
  let component: AdminviewhelpComponent;
  let fixture: ComponentFixture<AdminviewhelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminviewhelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminviewhelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
