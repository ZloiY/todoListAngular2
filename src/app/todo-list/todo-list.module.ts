import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AuthenticationModule } from '../authentication/authentication.module';
import { ActiveTasksPipe } from './active-tasks.pipe';
import { CompleteTasksPipe } from './complete-tasks.pipe';
import { CoreModule } from '../core/core.module';
import { TodoListService } from './todo-list.service';
import { TodoListComponent } from './todo-list.component';
import { TodoListInputComponent } from './tdlist-input/tdlist-input.component';
import { TodoListSortComponent } from './tdlist-sort/tdlist-sort.component';
import { TodoListTaskElementComponent } from './tdlist-task/tdlist-task.component';
import { TodoListToggleTasksDelChecked } from './tdlist-taskscheck-delchecked/tdlist-taskscheck-delchecked.component';

@NgModule({
  imports: [
    AuthenticationModule,
    BrowserAnimationsModule,
    CoreModule,
  ],
  declarations: [
    TodoListComponent,
    TodoListInputComponent,
    TodoListSortComponent,
    TodoListTaskElementComponent,
    TodoListToggleTasksDelChecked,
    TodoListService,
  ],
  exports: [TodoListComponent],
  providers: [
    TodoListService,
    ActiveTasksPipe,
    CompleteTasksPipe,
  ]
})
export class TodoListModule { }
