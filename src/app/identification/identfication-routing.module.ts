import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { IdentificationComponent } from './identification.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'identification', component: IdentificationComponent}
  ])],
  exports: [RouterModule]
})
export class IdentificationRoutingModule {}
