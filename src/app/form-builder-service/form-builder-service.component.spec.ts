import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FormBuilderServiceComponent } from './form-builder-service.component';

describe('FormBuilderServiceComponent', () => {
  let component: FormBuilderServiceComponent;
  let fixture: ComponentFixture<FormBuilderServiceComponent>;

  beforeEach(waitForAsync(() => {
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
