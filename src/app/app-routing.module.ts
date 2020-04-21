import { FormBuilderServiceComponent } from './form-builder-service/form-builder-service.component';
import { AddingFormHtmlComponent } from './adding-form-html/adding-form-html.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';


const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'adding-form-html', component: AddingFormHtmlComponent },
  { path: 'form-builder-service', component: FormBuilderServiceComponent },
  { path: '**', component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
