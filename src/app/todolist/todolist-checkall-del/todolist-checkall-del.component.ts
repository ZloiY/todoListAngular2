import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-todolist-checkall-del',
  templateUrl: './todolist-checkall-del.component.html',
  styleUrls: ['./todolist-checkall-del.component.css']
})
export class TodolistCheckallDelComponent implements OnInit {

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
