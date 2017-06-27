import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { ActiveTasksPipe } from './active-tasks.pipe';
import { CompleteTasksPipe } from './complete-tasks.pipe';
import { TasksService } from './todo-list.service';
import { TodoListComponent } from './todo-list.component';
import { TodoListInputComponent } from './input.component';
import { TodoListSortComponent } from './sort.component';
import { TodoListTaskElementComponent } from './task.component';
import { TodoListCheckallDelComponent } from './checkall-del.component';
import { TodoListRoutingModule } from './todo-list-routing.module';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    HttpModule,
    TodoListRoutingModule,
  ],
  declarations: [
    ActiveTasksPipe,
    CompleteTasksPipe,
    TodoListComponent,
    TodoListInputComponent,
    TodoListSortComponent,
    TodoListTaskElementComponent,
    TodoListCheckallDelComponent,
  ],
  exports: [ TodoListComponent ],
  providers: [ TasksService ]
})
export class TodoListModule { }
