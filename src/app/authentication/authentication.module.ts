import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AuthGuard } from './auth-guard.service';
import { AuthLogoutComponent } from './auth-logout/auth-logout.component';
import { AuthRegistrationComponent } from "./auth-registration/auth-registration.component";
import { AuthenticationService } from './authentication.service';
import { AuthenticationComponent } from './authentication.component';
import { AuthenticationRoutingModule } from './authentication-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    HttpModule,
    AuthenticationRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AuthenticationComponent,
    AuthLogoutComponent,
    AuthRegistrationComponent,
  ],
  exports: [
    AuthenticationComponent,
    AuthLogoutComponent,
  ],
  providers: [
    AuthenticationService,
    AuthGuard,
  ]
})
export class AuthenticationModule { }
