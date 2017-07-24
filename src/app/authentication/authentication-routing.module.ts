import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthenticationComponent } from './authentication.component';
import { AuthRegistrationComponent } from './auth-registration/auth-registration.component';
import { AuthActivate } from './auth-activate.service';

export const routes: Routes = [
  { path: 'authentication', component: AuthenticationComponent, canActivate: [AuthActivate] },
  { path: 'registration', component: AuthRegistrationComponent, canActivate: [AuthActivate] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule {}
