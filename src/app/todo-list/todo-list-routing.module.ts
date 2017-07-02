import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthGuard } from '../authentication/auth-guard.service';
import { TodoListComponent } from './todo-list.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'todolist',
      component: TodoListComponent,
      canActivate: [
        AuthGuard
      ]}
  ])],
  providers: [AuthGuard],
  exports: [RouterModule]
})
export class TodoListRoutingModule {}
