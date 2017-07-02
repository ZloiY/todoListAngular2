import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TodoListComponent } from './todo-list.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'todolist', component: TodoListComponent}
  ])],
  exports: [RouterModule]
})
export class TodoListRoutingModule {}
