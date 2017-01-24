import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { AUTH_PROVIDERS } from 'angular2-jwt';


import { AppComponent } from './app.component';
import { routing, routedComponents } from './app.routing';
import { DynamicFormComponent } from './dynamic-form.component';
import { DynamicFormQuestionComponent } from './dynamic-form-question.component';
<<<<<<< HEAD
import { ActivityDetailComponent } from './activity-detail.component';
=======
>>>>>>> 5208f1f5dc8ab596e8663c68a029a5c367578c0a

import { ActivityService } from './activity.service';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';

@NgModule({
   imports: [
    BrowserModule,
    JsonpModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    HttpModule
  ],
  declarations: [
    AppComponent,
    DynamicFormComponent,
    DynamicFormQuestionComponent,
<<<<<<< HEAD
    routedComponents,
   //ActivityDetailComponent
=======
    routedComponents
>>>>>>> 5208f1f5dc8ab596e8663c68a029a5c367578c0a
  ],
  providers: [
    ActivityService,
    AUTH_PROVIDERS,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
constructor() {

  }
}
