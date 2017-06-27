import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task';
import { trigger, state, style, transition, animate, keyframes } from "@angular/animations";

@Component({
  selector: 'tdlist-task',
  templateUrl: 'task.component.html',
  styleUrls: ['task.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0) scale(1)'})),
      transition('void => *', [
        style({transform: 'translateX(0) scale(0)'}),
        animate(250)
      ]),
      transition('* => void', [
        animate(250, style({transform: 'translateX(0) scale(0)'}))
      ]),
    ]),
    trigger('jump', [
      transition('* => jump', animate(500, keyframes([
        style({'transform': 'translateY(0px)'}),
        style({'transform': 'translateY(-30px)'}),
        style({'transform': 'translateY(0px)'}),
        style({'transform': 'translateY(-15px)'}),
        style({'transform': 'translateY(0px)'})
      ])))
    ]),
  ]
})
export class TodoListTaskElementComponent {

  @Input() task: Task;
  @Output() onCheck = new EventEmitter<Task>();
  @Output() onClose = new EventEmitter<Task>();
  isClicked: string;

  onCloseClick(closeTask: Task) {
    this.onClose.emit(closeTask);
  }

  toggleCheck(task: Task) {
    task.complete = !task.complete;
    task.complete ? this.isClicked = 'jump' : this.isClicked = '';
    this.onCheck.emit(task);
  }
}
