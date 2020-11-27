import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudCrudOperationComponent } from './stud-crud-operation.component';

describe('StudCrudOperationComponent', () => {
  let component: StudCrudOperationComponent;
  let fixture: ComponentFixture<StudCrudOperationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudCrudOperationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudCrudOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
