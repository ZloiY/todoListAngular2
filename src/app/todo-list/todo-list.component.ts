import { Component, OnInit } from '@angular/core';

import { ActiveTasksPipe } from '../shared/active-tasks.pipe';
import { CompleteTasksPipe } from '../shared/complete-tasks.pipe';
import { Task } from '../core/task.model';
import { TodoListService } from './todo-list.service';

@Component({
  selector: 'todo-list',
  templateUrl: 'todo-list.component.html',
  styleUrls: ['todo-list.component.scss'],
})

export class TodoListComponent implements OnInit {

  ngOnInit() {
    this.tasks = [];
    this.visibleTasks = [];
    this.tdListService
      .getTasks()
      .subscribe(tasks => {
        this.tasks = tasks;
        this.getActiveTasks();
        this.onAll();
      });
  }

  task: Task;
  tasks: Task[];
  visibleTasks: Task[];
  activeItems = 0;
  currentFilter: any;
  tasksFilter = {
    showAllTasks: function() { this.onAll() },
    showCompleteTasks: function() { this.onComplete() },
    showActiveTasks: function() { this.onActive() },
  };

  constructor(
    private tdListService: TodoListService,
    private activeTasksPipe: ActiveTasksPipe,
    private completeTasksPipe: CompleteTasksPipe
  ) {}

  onAdd(newTask: string): void {
    this.tdListService
      .addTask(newTask)
      .subscribe(task => {
        this.tasks.push(task);
        this.getActiveTasks();
        this.currentFilter();
      });
  }

  onAll() {
    this.currentFilter = this.tasksFilter.showAllTasks;
    this.visibleTasks = this.tasks;
  }

  onComplete() {
    this.currentFilter = this.tasksFilter.showCompleteTasks;
    this.visibleTasks = this.completeTasksPipe.transform(this.tasks);
  }

  onActive() {
    this.currentFilter = this.tasksFilter.showActiveTasks;
    this.visibleTasks = this.activeTasksPipe.transform(this.tasks);
  }

  onCheck(task: Task) {
    this.tdListService
      .updateTask(task)
      .subscribe(() => {
        this.getActiveTasks();
        this.currentFilter();
      });
  }

  onClose(closeTask: Task) {
    this.tdListService
      .deleteTask(closeTask.id)
      .subscribe(() => {
      this.tasks = this.tasks.filter((task) => task !== closeTask);
      this.getActiveTasks();
      this.currentFilter();
    });
  }

  onCheckUncheck(allCheckbox: boolean) {
    this.tdListService
      .updateTasks(!allCheckbox)
      .subscribe(() => {
        this.tasks.forEach((task) => {
          task.complete = !allCheckbox;
        });
        this.getActiveTasks();
        this.currentFilter();
      });
  }

  onDelChecked() {
    this.tdListService
      .deleteTasks()
      .subscribe(() => {
        this.tasks = this.tasks.filter((task) => !task.complete);
        this.currentFilter();
      });
  }

  getActiveTasks() {
    const activeTasks = this.tasks.filter((task) => !task.complete);
    this.activeItems = activeTasks.length;
  }

}
