import { Component, OnInit } from '@angular/core';
import { Task } from './task';
import { TasksService } from "./tasks.service";

@Component({
  selector: 'app-todo-list',
  templateUrl: 'todo-list.component.html',
  styleUrls: ['todo-list.component.scss'],
})

export class TodoListComponent implements OnInit {
  task: Task;
  tasks: Task[];
  activeItems: number;
  allCheck: boolean;
  activeCheck: boolean;
  completeCheck: boolean;

  constructor(private tasksService: TasksService,){}

  onAdd(newTask: string): void {
    this.tasksService
      .addTask(newTask)
      .then(task => {
        this.tasks.push(task);
        this.getActiveTasks();
      });
  }

  onAll() {
    this.allCheck = true;
    this.completeCheck = false;
    this.activeCheck = false;
  }

  onComplete() {
    this.allCheck = false;
    this.completeCheck = true;
    this.activeCheck = false;
  }

  onActive() {
    this.allCheck = false;
    this.completeCheck = false;
    this.activeCheck = true;
  }

  onCheck(task: Task) {
    this.tasksService
      .updateTask(task)
      .then(() => this.getActiveTasks());
  }

  onClose(closeTask: Task) {
    this.tasksService
      .deleteTask(closeTask.id)
      .then(() => {
      this.tasks = this.tasks.filter((task) => task !== closeTask);
      this.getActiveTasks();
    });
  }

  onCheckUncheck(allCheckbox: boolean) {
    this.tasks.forEach((task) => {
      task.task_check = !allCheckbox;
      this.tasksService
        .updateTask(task)
        .then(() => this.getActiveTasks());
    });
  }

  onDelChecked() {
    this.tasks = this.tasks.filter((task) => !task.task_check);
  }

  getActiveTasks() {
    const activeTasks = this.tasks.filter((task) => !task.task_check);
    this.activeItems = activeTasks.length;
  }

  ngOnInit() {
    this.tasks = [];
    this.tasksService
      .getTasks()
      .then(tasks => {
        this.tasks = tasks;
        this.getActiveTasks();
      });
    this.onAll();
  }

}
