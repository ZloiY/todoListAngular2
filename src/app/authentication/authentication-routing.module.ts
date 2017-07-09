import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthenticationComponent } from './authentication.component';
import { AuthRegistrationComponent } from './auth-registration/auth-registration.component';

export const routes: Routes = [
  { path: 'authentication', component: AuthenticationComponent },
  { path: 'registration', component: AuthRegistrationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule {}
