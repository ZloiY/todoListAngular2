import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'tdlist-input',
  templateUrl: 'tdlist-input.component.html',
  styleUrls: ['tdlist-input.component.scss'],
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
