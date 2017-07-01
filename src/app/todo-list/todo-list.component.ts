import { Component, OnInit } from '@angular/core';

import { ActiveTasksPipe } from './active-tasks.pipe';
import { CompleteTasksPipe } from './complete-tasks.pipe';
import { Task } from './task';
import { TodoListService } from './todo-list.service';

@Component({
  selector: 'todo-list',
  templateUrl: 'todo-list.component.html',
  styleUrls: ['todo-list.component.scss'],
})

export class TodoListComponent implements OnInit {
  task: Task;
  tasks: Task[];
  visibleTasks: Task[];
  activeItems: number;
  currentFilter: number;

  constructor(
    private tdListService: TodoListService,
    private activeTasksPipe: ActiveTasksPipe,
    private completeTasksPipe: CompleteTasksPipe
  ) {}

  onAdd(newTask: string): void {
    this.tdListService
      .addTask(newTask)
      .then(task => {
        this.tasks.push(task);
        this.getActiveTasks();
        this.refreshVisibleTasks();
      });
  }

  onAll() {
    this.currentFilter = 0;
    this.refreshVisibleTasks();
  }

  onComplete() {
    this.currentFilter = 1;
    this.refreshVisibleTasks();
  }

  onActive() {
    this.currentFilter = 2;
    this.refreshVisibleTasks();
  }

  onCheck(task: Task) {
    this.tdListService
      .updateTask(task)
      .then(() => {
        this.getActiveTasks();
        this.refreshVisibleTasks();
      });
  }

  onClose(closeTask: Task) {
    this.tdListService
      .deleteTask(closeTask.id)
      .then(() => {
      this.tasks = this.tasks.filter((task) => task !== closeTask);
      this.getActiveTasks();
      this.refreshVisibleTasks();
    });
  }

  onCheckUncheck(allCheckbox: boolean) {
    this.tasks.forEach((task) => {
      task.complete = !allCheckbox;
      this.tdListService
        .updateTask(task)
        .then(() => {
          this.getActiveTasks();
          this.refreshVisibleTasks();
        });
    });
  }

  onDelChecked() {
    this.tasks = this.tasks.filter((task) => !task.complete);
    this.refreshVisibleTasks();
  }

  getActiveTasks() {
    const activeTasks = this.tasks.filter((task) => !task.complete);
    this.activeItems = activeTasks.length;
  }

  refreshVisibleTasks() {
    switch(this.currentFilter) {
      case 0: {
        this.visibleTasks = this.tasks;
        break;
      }
      case 1: {
        this.visibleTasks = this.completeTasksPipe.transform(this.tasks);
        break;
      }
      case 2: {
        this.visibleTasks = this.activeTasksPipe.transform(this.tasks);
        break;
      }
    }
  }

  ngOnInit() {
    this.tasks = [];
    this.tdListService
      .getTasks()
      .then(tasks => {
        this.tasks = tasks;
        this.getActiveTasks();
        this.onAll();
      });
  }

}
