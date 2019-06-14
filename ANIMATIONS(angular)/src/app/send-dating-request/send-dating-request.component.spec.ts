import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendDatingRequestComponent } from './send-dating-request.component';

describe('SendDatingRequestComponent', () => {
  let component: SendDatingRequestComponent;
  let fixture: ComponentFixture<SendDatingRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendDatingRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendDatingRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
