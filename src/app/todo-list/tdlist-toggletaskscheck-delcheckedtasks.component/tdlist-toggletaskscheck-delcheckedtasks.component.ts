import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'tdlist-toggletaskscheck-delcheckedtasks',
  templateUrl: 'tdlist-toggletaskscheck-delcheckedtasks.component.html',
  styleUrls: ['tdlist-toggletaskscheck-delcheckedtasks.component.scss']
})
export class TodoListToggleTasksCheckDelCheckedTasks implements OnInit {

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
