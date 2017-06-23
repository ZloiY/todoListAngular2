import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Task} from '../../task';

@Component({
  selector: 'app-todolist-taskelement',
  templateUrl: './todolist-taskelement.component.html',
  styleUrls: ['../todolist.component.css']
})
export class TodolistTaskelementComponent {

  @Input() task: Task;
  @Output() onCheck = new EventEmitter();
  @Output() onClose = new EventEmitter<Task>();

  onCloseClick(closeTask: Task) {
    this.onClose.emit(closeTask);
  }

  toggleCheck(task: Task) {
    task.check = !task.check;
    this.onCheck.emit();
  }

}
