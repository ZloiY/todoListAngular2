import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'tdlist-sort',
  templateUrl: 'tdlist-sort.component.html',
  styleUrls: ['tdlist-sort.component.scss']
})
export class TodoListSortComponent implements OnInit {

  ngOnInit() {
    this.onAllClick();
  }

  @Output() onAll = new EventEmitter();
  @Output() onActive = new EventEmitter();
  @Output() onComplete = new  EventEmitter();
  completeChecked: boolean;
  activeChecked: boolean;
  allChecked: boolean;

  onAllClick() {
    this.completeChecked = false;
    this.activeChecked = false;
    this.allChecked = true;
    this.onAll.emit();
  }

  onCompleteClick() {
    this.completeChecked = true;
    this.activeChecked = false;
    this.allChecked = false;
    this.onComplete.emit();
  }

  onActiveClick() {
    this.completeChecked = false;
    this.activeChecked = true;
    this.allChecked = false;
    this.onActive.emit();
  }

}
