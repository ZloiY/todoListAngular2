import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-todo-list-input',
  templateUrl: 'todo-list-input.component.html',
  styleUrls: ['./todo-list-input.component.scss'],
})
export class TodoListInputComponent {

  @Output() onAdd = new EventEmitter<string>();

  onAddBtnClick(taskInput) {
    const taskName = (<HTMLInputElement>taskInput);
    if (taskName.value === '') {
      alert('You must entry task name.');
      return;
    }
    this.onAdd.emit(taskName.value);
    taskName.value = '';
  }

  onEnterPressed(event) {
    if (event.keyCode === 13) {
      this.onAddBtnClick((<HTMLInputElement>event.target));
    }
  }

}
