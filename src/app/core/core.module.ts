import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthenticationService } from '../authentication/authentication.service';
import { AuthenticationModule } from '../authentication/authentication.module';

@NgModule({
  imports:[
    AuthenticationModule,
    CommonModule,
    HttpModule,
    ReactiveFormsModule,
  ],
  declarations:[],
  providers:[
    AuthenticationService
  ],
  exports:[]
})

export class CoreModule {}
