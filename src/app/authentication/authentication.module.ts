import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AuthGuard } from './auth-guard.service';
import { AuthLogoutComponent } from './auth-logout/auth-logout.component';
import { AuthRegistrationComponent } from "./auth-registration/auth-registration.component";
import { AuthenticationComponent } from './authentication.component';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthenticationService } from './authentication.service';
import { CoreModule } from '../core/core.module';

@NgModule({
  imports: [
    BrowserModule,
    CoreModule,
    AuthenticationRoutingModule,
  ],
  declarations: [
    AuthenticationComponent,
    AuthLogoutComponent,
    AuthRegistrationComponent,
    AuthenticationService,
  ],
  exports: [
    AuthenticationComponent,
    AuthLogoutComponent,
  ],
  providers: [
    AuthGuard,
  ]
})
export class AuthenticationModule { }
