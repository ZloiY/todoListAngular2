import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-list-checkall-del',
  templateUrl: 'todo-list-checkall-del.component.html',
  styleUrls: ['./todo-list-checkall-del.component.scss']
})
export class TodoListCheckallDelComponent implements OnInit {

  @Output() onCheckUncheck = new EventEmitter<boolean>();
  @Output() onDelChecked = new EventEmitter();
  allCheckbox: boolean;

  onCheckUncheckClick() {
    this.onCheckUncheck.emit(this.allCheckbox);
    this.allCheckbox = !this.allCheckbox;
  }

  onDelCheckedClick() {
    this.onDelChecked.emit();
    this.allCheckbox = false;
  }

  ngOnInit() {
    this.allCheckbox = false;
  }

}
