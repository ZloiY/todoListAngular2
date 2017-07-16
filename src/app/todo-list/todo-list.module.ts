import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { TodoListService } from './todo-list.service';
import { TodoListComponent } from './todo-list.component';
import { TodoListSortComponent } from './tdlist-sort/tdlist-sort.component';
import { TodoListTaskElementComponent } from './tdlist-task/tdlist-task.component';
import { TodoListToggleTasksDelChecked } from './tdlist-taskscheck-delchecked/tdlist-taskscheck-delchecked.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  declarations: [
    TodoListComponent,
    TodoListSortComponent,
    TodoListTaskElementComponent,
    TodoListToggleTasksDelChecked,
  ],
  exports: [TodoListComponent],
  providers: [TodoListService],
})
export class TodoListModule {}
