import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddingFormHtmlComponent } from './adding-form-html/adding-form-html.component';
import { FormBuilderServiceComponent } from './form-builder-service/form-builder-service.component';
import { ValidationComponent } from './validation/validation.component';
import { ConditionalValidationComponent } from './conditional-validation/conditional-validation.component';

@NgModule({
  declarations: [
    AppComponent,
    AddingFormHtmlComponent,
    FormBuilderServiceComponent,
    ValidationComponent,
    ConditionalValidationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
