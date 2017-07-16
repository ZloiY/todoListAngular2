import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthGuard } from './auth-guard.service';
import { AuthRegistrationComponent } from "./auth-registration/auth-registration.component";
import { AuthenticationComponent } from './authentication.component';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthenticationService } from './authentication.service';

@NgModule({
  imports: [
    AuthenticationRoutingModule,
    BrowserModule,
    CommonModule,
    HttpModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AuthenticationComponent,
    AuthRegistrationComponent,
  ],
  exports: [
    AuthenticationComponent,
  ],
  providers: [
    AuthGuard,
    AuthenticationService
  ]
})
export class AuthenticationModule {}
