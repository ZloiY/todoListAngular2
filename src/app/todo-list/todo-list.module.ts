import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthGuard } from '../authentication/auth-guard.service';
import { AuthenticationModule } from "../authentication/authentication.module";
import { ActiveTasksPipe } from './active-tasks.pipe';
import { CompleteTasksPipe } from './complete-tasks.pipe';
import { CoreModule } from '../core/core.module';
import { CoreService } from '../core/core.service';
import { TodoListComponent } from './todo-list.component';
import { TodoListInputComponent } from './tdlist-input/tdlist-input.component';
import { TodoListSortComponent } from './tdlist-sort/tdlist-sort.component';
import { TodoListTaskElementComponent } from './tdlist-task/tdlist-task.component';
import { TodoListToggleTasksDelChecked } from './tdlist-taskscheck-delchecked/tdlist-taskscheck-delchecked.component';
import { TodoListRoutingModule } from './todo-list-routing.module';

@NgModule({
  imports: [
    AuthenticationModule,
    BrowserAnimationsModule,
    CoreModule,
    CommonModule,
    FormsModule,
    HttpModule,
    TodoListRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    TodoListComponent,
    TodoListInputComponent,
    TodoListSortComponent,
    TodoListTaskElementComponent,
    TodoListToggleTasksDelChecked,
  ],
  exports: [ TodoListComponent ],
  providers: [
    AuthGuard,
    CoreService,
    ActiveTasksPipe,
    CompleteTasksPipe,
  ]
})
export class TodoListModule { }
