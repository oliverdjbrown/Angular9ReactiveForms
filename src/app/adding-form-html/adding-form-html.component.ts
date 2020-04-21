import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-adding-form-html',
  templateUrl: './adding-form-html.component.html',
  styleUrls: ['./adding-form-html.component.css']
})
export class AddingFormHtmlComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
  }

}
