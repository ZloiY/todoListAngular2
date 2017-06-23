import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
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

  onCheckClick(task: Task, checked: boolean) {
    task.check = checked;
    this.onCheck.emit();
  }

  onCloseClick(closeTask: Task) {
    this.onClose.emit(closeTask);
  }

}
