import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-todo-list-input',
  templateUrl: 'todo-list-input.component.html',
  styleUrls: ['./todo-list-input.component.css']
})
export class TodoListInputComponent {

  @Output() onAdd = new EventEmitter<string>();

  onAddBtnClick(taskName) {
    if (taskName.length === 0) {
      alert('You must entry task name.');
      return;
    }
    this.onAdd.emit(taskName);
  }

  onEnterPressed(event) {
    if (event.keyCode === 13) {
      this.onAddBtnClick((<HTMLInputElement>event.target).value);
    }
  }

}
