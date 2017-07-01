import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AuthLogoutComponent } from './auth-logout/auth-logout.component';
import { AuthenticationService } from './authentication.service';
import { AuthenticationComponent } from './authentication.component';
import { IdentificationRoutingModule } from './authentication-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    HttpModule,
    IdentificationRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ AuthenticationComponent, AuthLogoutComponent ],
  exports: [ AuthenticationComponent, AuthLogoutComponent ],
  providers: [ AuthenticationService]
})
export class AuthenticationModule { }
