import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallserviceComponent } from './callservice.component';

describe('CallserviceComponent', () => {
  let component: CallserviceComponent;
  let fixture: ComponentFixture<CallserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
