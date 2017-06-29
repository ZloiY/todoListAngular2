import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { ActiveTasksPipe } from './active-tasks.pipe';
import { CompleteTasksPipe } from './complete-tasks.pipe';
import { TodoListService } from './todo-list.service';
import { TodoListComponent } from './todo-list.component';
import { TodoListInputComponent } from './tdlist-input.component/tdlist-input.component';
import { TodoListSortComponent } from './tdlist-sort.component/tdlist-sort.component';
import { TodoListTaskElementComponent } from './tdlist-task.component/tdlist-task.component';
import { TodoListToggleTasksCheckDelCheckedTasks } from './tdlist-toggletaskscheck-delcheckedtasks.component/tdlist-toggletaskscheck-delcheckedtasks.component';
import { TodoListLogoutComponent } from './tdlist-logout.component/tdlist-logout.component';
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
    TodoListToggleTasksCheckDelCheckedTasks,
    TodoListLogoutComponent
  ],
  exports: [ TodoListComponent ],
  providers: [ TodoListService ]
})
export class TodoListModule { }
