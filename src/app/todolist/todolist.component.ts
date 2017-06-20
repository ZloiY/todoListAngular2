import {Component, OnInit, ElementRef, ViewChild, Renderer2} from '@angular/core';
import {Task} from '../task';

@Component({
  selector: 'todo-list',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
})

export class TodoListComponent implements OnInit {
  @ViewChild('allTasks') allTasks: ElementRef;
  @ViewChild('completeTasks') completeTasks: ElementRef;
  @ViewChild('activeTasks') activeTasks: ElementRef;
  task: Task;
  tasks: Task[];
  activeItems: number;
  allCheckbox: boolean;
  allCheck: boolean;
  activeCheck: boolean;
  completeCheck: boolean;

  constructor(private rd: Renderer2) {}

  onAddBtnClick(newTask: string): void {
    if (newTask.length === 0) {
      alert('You must entry task name.');
      return;
    }
    this.task = {
      name: newTask,
      check: false,
    };
    this.tasks.push(this.task);
    this.getActiveTasks();
  }

  onCheckClick(task: Task, checked: boolean): void {
    task.check = checked;
    this.getActiveTasks();
  }

  onCloseClick(closeTask: Task): void {
    this.tasks = this.tasks.filter((task) => task !== closeTask);
    this.getActiveTasks();
  }

  onAllClick() {
    this.allCheck = true;
    this.activeCheck = false;
    this.completeCheck = false;
    this.rd.addClass(this.allTasks.nativeElement, 'radio-btn-label-selected');
    this.rd.removeClass(this.completeTasks.nativeElement, 'radio-btn-label-selected');
    this.rd.removeClass(this.activeTasks.nativeElement, 'radio-btn-label-selected');
  }

  onCompleteClick() {
    this.completeCheck = true;
    this.allCheck = false;
    this.activeCheck = false;
    this.rd.addClass(this.completeTasks.nativeElement, 'radio-btn-label-selected');
    this.rd.removeClass(this.allTasks.nativeElement, 'radio-btn-label-selected');
    this.rd.removeClass(this.activeTasks.nativeElement, 'radio-btn-label-selected');
  }

  onActiveClick() {
    this.activeCheck = true;
    this.completeCheck = false;
    this.allCheck = false;
    this.rd.addClass(this.activeTasks.nativeElement, 'radio-btn-label-selected');
    this.rd.removeClass(this.allTasks.nativeElement, 'radio-btn-label-selected');
    this.rd.removeClass(this.completeTasks.nativeElement, 'radio-btn-label-selected');
  }

  onCheckUncheck() {
    this.tasks.forEach((task) => {
      task.check = !this.allCheckbox;
    });
    this.allCheckbox = !this.allCheckbox;
    this.getActiveTasks();
  }

  onDelChecked() {
    this.tasks = this.tasks.filter((task) => !task.check);
    this.allCheckbox = false;
  }

  getActiveTasks(): void {
    const activeTasks = this.tasks.filter((task) => !task.check);
    this.activeItems = activeTasks.length;
  }

  ngOnInit(): void {
    this.tasks = [];
    this.allCheck = true;
    this.getActiveTasks();
    this.onAllClick()
  }
}
