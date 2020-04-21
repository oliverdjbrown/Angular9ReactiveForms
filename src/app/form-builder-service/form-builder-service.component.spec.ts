import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBuilderServiceComponent } from './form-builder-service.component';

describe('FormBuilderServiceComponent', () => {
  let component: FormBuilderServiceComponent;
  let fixture: ComponentFixture<FormBuilderServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormBuilderServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBuilderServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
