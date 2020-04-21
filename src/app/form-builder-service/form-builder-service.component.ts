import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-builder-service',
  templateUrl: './form-builder-service.component.html',
  styleUrls: ['./form-builder-service.component.css']
})
export class FormBuilderServiceComponent implements OnInit {

  registrationForm = this.fb.group({
    userName: ['Oliver'],
    password: [''],
    confirmPassword: [''],
    address: this.fb.group({
      city: [''],
      state: [''],
      postalCode: ['']
    })
  });

  /*
    registrationForm =  new FormGroup({
    userName: new FormControl('Oliver'),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    address: new FormGroup({
      city: new FormControl(''),
      state: new FormControl(''),
      postalCode: new FormControl('')
    })
  });
  */

  loadApiData() {
    this.registrationForm.setValue({
      userName: 'Bruce',
      password: 'test',
      confirmPassword: 'test',
      address: {
        city: 'City',
        state: 'State',
        postalCode: '123456'
      }
    });
  }

  loadApiData2() {
    this.registrationForm.patchValue({
      userName: 'Bruce',
      password: 'test',
      confirmPassword: 'test'
    });
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
