import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateFormsDemo1Component } from './template-forms-demo1.component';

describe('TemplateFormsDemo1Component', () => {
  let component: TemplateFormsDemo1Component;
  let fixture: ComponentFixture<TemplateFormsDemo1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateFormsDemo1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateFormsDemo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
