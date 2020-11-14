import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddingFormHtmlComponent } from './adding-form-html.component';

describe('AddingFormHtmlComponent', () => {
  let component: AddingFormHtmlComponent;
  let fixture: ComponentFixture<AddingFormHtmlComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddingFormHtmlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddingFormHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
