import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthenticationComponent } from './authentication.component';
import { AuthRegistrationComponent } from './auth-registration/auth-registration.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'authentication', component: AuthenticationComponent },
    { path: 'registration', component: AuthRegistrationComponent}
  ])],
  exports: [RouterModule]
})
export class IdentificationRoutingModule {}
