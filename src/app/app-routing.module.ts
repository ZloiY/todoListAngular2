import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './authentication/auth-guard.service';
import { TodoListComponent } from './todo-list/todo-list.component';

export const routes: Routes = [
  { path: '', redirectTo: 'authentication', pathMatch: 'full' },
  { path: 'todolist', component: TodoListComponent, canActivate: [AuthGuard] },
  { path: '^registration|**', redirectTo: 'authentication' },
  { path: '**', canActivate: [AuthGuard], redirectTo: 'todolist', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
