import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Task} from '../task';

@Component({
  selector: 'app-todo-list-task-element',
  templateUrl: 'todo-list-task-element.component.html',
  styleUrls: ['./todo-list-task-element.component.css']
})
export class TodoListTaskElementComponent {

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
