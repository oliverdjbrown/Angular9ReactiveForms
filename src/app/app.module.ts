import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddingFormHtmlComponent } from './adding-form-html/adding-form-html.component';
import { FormBuilderServiceComponent } from './form-builder-service/form-builder-service.component';
import { ValidationComponent } from './validation/validation.component';
import { ConditionalValidationComponent } from './conditional-validation/conditional-validation.component';
import { DynamicFormControlComponent } from './dynamic-form-control/dynamic-form-control.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AddingFormHtmlComponent,
    FormBuilderServiceComponent,
    ValidationComponent,
    ConditionalValidationComponent,
    DynamicFormControlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
