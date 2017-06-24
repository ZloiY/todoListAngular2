import {Component, OnInit} from '@angular/core';
import {Task} from './task';
import {style, animate, transition, state, trigger} from "@angular/animations";

@Component({
  selector: 'app-todo-list',
  templateUrl: 'todo-list.component.html',
  styleUrls: ['todo-list.component.css'],
  animations: [
    trigger('shrinkOut', [
      state('shrink', style({height: '*'})),
      transition('void => *', [
        style({height: 0}),
        animate(450, style({height: '*'}))
      ]),
    ])
  ]
})

export class TodoListComponent implements OnInit {
  task: Task;
  tasks: Task[];
  activeItems: number;
  allCheck: boolean;
  activeCheck: boolean;
  completeCheck: boolean;

  onAdd(newTask: string): void {
    this.task = {
      name: newTask,
      check: false,
    };
    this.tasks.push(this.task);
    this.getActiveTasks();
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

  onCheck() {
    this.getActiveTasks();
  }

  onClose(closeTask: Task) {
    this.tasks = this.tasks.filter((task) => task !== closeTask);
    this.getActiveTasks();
  }

  onCheckUncheck(allCheckbox: boolean) {
    this.tasks.forEach((task) => {
      task.check = !allCheckbox;
    });
    this.getActiveTasks();
  }

  onDelChecked() {
    this.tasks = this.tasks.filter((task) => !task.check);
  }

  getActiveTasks() {
    const activeTasks = this.tasks.filter((task) => !task.check);
    this.activeItems = activeTasks.length;
  }

  ngOnInit() {
    this.tasks = [];
    this.allCheck = false;
    this.completeCheck = false;
    this.activeCheck = false;
    this.getActiveTasks();
  }

}
