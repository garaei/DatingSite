import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatingInquiryComponent } from './dating-inquiry.component';

describe('DatingInquiryComponent', () => {
  let component: DatingInquiryComponent;
  let fixture: ComponentFixture<DatingInquiryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatingInquiryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatingInquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
