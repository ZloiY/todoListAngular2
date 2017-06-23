import {Component, OnInit} from '@angular/core';
import {Task} from '../task';

@Component({
  selector: 'todo-list',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
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
    this.getActiveTasks();
  }

}
