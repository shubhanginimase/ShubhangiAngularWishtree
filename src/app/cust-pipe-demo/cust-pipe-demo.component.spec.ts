import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustPipeDemoComponent } from './cust-pipe-demo.component';

describe('CustPipeDemoComponent', () => {
  let component: CustPipeDemoComponent;
  let fixture: ComponentFixture<CustPipeDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustPipeDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustPipeDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
