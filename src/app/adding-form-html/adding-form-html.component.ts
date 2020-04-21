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
    confirmPassword: new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
  }

}
