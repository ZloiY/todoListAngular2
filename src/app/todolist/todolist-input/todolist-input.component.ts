import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-todolist-input',
  templateUrl: './todolist-input.component.html',
  styleUrls: ['../todolist.component.css']
})
export class TodolistInputComponent {

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
