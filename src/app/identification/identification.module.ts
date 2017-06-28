import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { IdentificationService } from './identification.service';
import { IdentificationComponent } from './identification.component';
import { IdentificationRoutingModule } from './identfication-routing.module';
import { LogoutComponent } from './logout.component/logout.component';
import { LogoutService } from './logout.component/logout.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    IdentificationRoutingModule,
  ],
  declarations: [
    IdentificationComponent,
    LogoutComponent,
  ],
  exports: [ IdentificationComponent, LogoutComponent ],
  providers: [ IdentificationService, LogoutService ]
})
export class IdentificationModule { }
