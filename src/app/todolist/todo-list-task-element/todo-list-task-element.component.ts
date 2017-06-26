import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Task} from '../task';
import {trigger, state, style, transition, animate, keyframes} from "@angular/animations";

@Component({
  selector: 'app-todo-list-task-element',
  templateUrl: 'todo-list-task-element.component.html',
  styleUrls: ['./todo-list-task-element.component.scss'],
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
  @Output() onCheck = new EventEmitter();
  @Output() onClose = new EventEmitter<Task>();
  isClicked: string;

  onCloseClick(closeTask: Task) {
    this.onClose.emit(closeTask);
  }

  toggleCheck(task: Task) {
    task.check = !task.check;
    task.check ? this.isClicked = 'jump' : this.isClicked = '';
    this.onCheck.emit();
  }
}
