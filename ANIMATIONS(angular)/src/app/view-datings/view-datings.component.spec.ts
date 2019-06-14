import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDatingsComponent } from './view-datings.component';

describe('ViewDatingsComponent', () => {
  let component: ViewDatingsComponent;
  let fixture: ComponentFixture<ViewDatingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDatingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDatingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
