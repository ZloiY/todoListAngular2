import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { IdentificationService } from './identification.service';
import { IdentificationComponent } from './identification.component';
import { IdentificationRoutingModule } from './identfication-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    IdentificationRoutingModule,
  ],
  declarations: [
    IdentificationComponent,
  ],
  exports: [ IdentificationComponent ],
  providers: [ IdentificationService ]
})
export class IdentificationModule { }
