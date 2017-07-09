import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../authentication/auth-guard.service';
import { TodoListComponent } from './todo-list.component';

export const routes: Routes = [
  { path: 'todolist',
    component: TodoListComponent,
    canActivate: [AuthGuard],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [AuthGuard],
  exports: [RouterModule]
})
export class TodoListRoutingModule {}
