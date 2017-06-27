import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
// import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { ActiveTasksPipe } from './active-tasks.pipe';
import { CompleteTasksPipe } from './complete-tasks.pipe';
// import { IdentificationService } from "./identification/identification.service";
// import { IdentificationComponent } from './identification/identification.component';
import { TasksService } from "./tasks.service";
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoListInputComponent } from './input/input.component';
import { TodoListSortComponent } from './sort/sort.component';
import { TodoListTaskElementComponent } from './task/task.component';
import { TodoListCheckallDelComponent } from './checkall-del/checkall-del.component';

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
    // IdentificationComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    /*RouterModule.forRoot([
      {
        path: 'tasks',
        component: TodoListComponent,
      }
    ]),*/
    HttpModule
  ],
  providers: [
    TasksService,
    // IdentificationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
