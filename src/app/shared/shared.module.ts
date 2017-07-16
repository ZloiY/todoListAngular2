import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthenticationModule } from '../authentication/authentication.module';
import { AuthLogoutComponent } from './auth-logout/auth-logout.component';
import { ActiveTasksPipe } from './active-tasks.pipe';
import { CompleteTasksPipe } from './complete-tasks.pipe';
import { TodoListInputComponent } from './tdlist-input/tdlist-input.component';

@NgModule({
  imports: [
    AuthenticationModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AuthLogoutComponent,
    TodoListInputComponent,
  ],
  providers: [
    ActiveTasksPipe,
    CompleteTasksPipe,
  ],
  exports: [TodoListInputComponent],
})
export class SharedModule {}
