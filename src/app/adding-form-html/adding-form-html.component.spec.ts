import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingFormHtmlComponent } from './adding-form-html.component';

describe('AddingFormHtmlComponent', () => {
  let component: AddingFormHtmlComponent;
  let fixture: ComponentFixture<AddingFormHtmlComponent>;

  beforeEach(async(() => {
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
