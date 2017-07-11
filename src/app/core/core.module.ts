import { NgModule } from '@angular/core';

import { AuthenticationService } from '../authentication/shared/authentication.service';
import { AuthenticationModule } from '../authentication/authentication.module';
import { CoreService } from './core.service';

@NgModule({
  imports:[ AuthenticationModule ],
  declarations:[],
  providers:[ CoreService, AuthenticationService ],
  exports:[]
})

export class CoreModule {}
