import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';

import { AppComponent } from './app.component';
import { ActiveTasksPipe } from './todolist/pipes/todo-list.active-tasks.pipe';
import { CompleteTasksPipe } from './todolist/pipes/todo-list.complete-tasks.pipe';
import { TodoListComponent } from './todolist/todo-list.component';
import { TodoListInputComponent } from './todolist/todo-list-input/todo-list-input.component';
import { TodoListSortComponent } from './todolist/todo-list-sort/todo-list-sort.component';
import { TodoListTaskElementComponent } from './todolist/todo-list-task-element/todo-list-task-element.component';
import { TodoListCheckallDelComponent } from './todolist/todo-list-checkall-del/todo-list-checkall-del.component';

@NgModule({
  declarations: [
    AppComponent,
    ActiveTasksPipe,
    CompleteTasksPipe,
    TodoListComponent,
    TodoListInputComponent,
    TodoListSortComponent,
    TodoListTaskElementComponent,
    TodoListCheckallDelComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
