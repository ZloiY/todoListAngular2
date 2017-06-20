import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {TodoListComponent} from './todolist/todolist.component';
import {CompleteTasksPipe} from './todolist/todolist.complete-tasks.pipe';
import {ActiveTasksPipe} from './todolist/todolist.active-tasks.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    CompleteTasksPipe,
    ActiveTasksPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
