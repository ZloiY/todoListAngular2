import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todolist/todolist.component';
import { CompleteTasksPipe } from './todolist/pipes/todolist.complete-tasks.pipe';
import { ActiveTasksPipe } from './todolist/pipes/todolist.active-tasks.pipe';
import { TodolistInputComponent } from './todolist/todolist-input/todolist-input.component';
import { TodolistSortComponent } from './todolist/todolist-sort/todolist-sort.component';
import { TodolistTaskelementComponent } from './todolist/todolist-taskelement/todolist-taskelement.component';
import { TodolistCheckallDelComponent } from './todolist/todolist-checkall-del/todolist-checkall-del.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    CompleteTasksPipe,
    ActiveTasksPipe,
    TodolistInputComponent,
    TodolistSortComponent,
    TodolistTaskelementComponent,
    TodolistCheckallDelComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
