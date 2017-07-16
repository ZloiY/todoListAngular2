import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'tdlist-taskscheck-delchecked',
  templateUrl: 'tdlist-taskscheck-delchecked.component.html',
  styleUrls: ['tdlist-taskscheck-delchecked.component.scss']
})
export class TodoListToggleTasksDelChecked implements OnInit {

  ngOnInit() {
    this.allCheckbox = false;
  }

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

}
