import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthGuard } from './auth-guard.service';
import { AuthActivate } from './auth-activate.service';
import { AuthRegistrationComponent } from "./auth-registration/auth-registration.component";
import { AuthenticationComponent } from './authentication.component';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthenticationService } from './authentication.service';
import { AuthLogoutComponent } from './auth-logout/auth-logout.component';

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
    AuthLogoutComponent,
  ],
  exports: [
    AuthenticationComponent,
    AuthLogoutComponent,
  ],
  providers: [
    AuthGuard,
    AuthActivate,
    AuthenticationService
  ]
})
export class AuthenticationModule {}
