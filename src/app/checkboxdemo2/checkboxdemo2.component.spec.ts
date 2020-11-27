import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Checkboxdemo2Component } from './checkboxdemo2.component';

describe('Checkboxdemo2Component', () => {
  let component: Checkboxdemo2Component;
  let fixture: ComponentFixture<Checkboxdemo2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Checkboxdemo2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Checkboxdemo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
