import {Component, OnInit, Renderer2, ElementRef, ViewChild, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-todolist-sort',
  templateUrl: './todolist-sort.component.html',
  styleUrls: ['../todolist.component.css']
})
export class TodolistSortComponent implements OnInit {

  @Output() onAll = new EventEmitter();
  @Output() onActive = new EventEmitter();
  @Output() onComplete = new  EventEmitter();
  @ViewChild('allTasks') allTasks: ElementRef;
  @ViewChild('completeTasks') completeTasks: ElementRef;
  @ViewChild('activeTasks') activeTasks: ElementRef;

  constructor(private rd: Renderer2) { }

  onAllClick() {
    this.onAll.emit();
    this.rd.addClass(this.allTasks.nativeElement, 'radio-btn-label-selected');
    this.rd.removeClass(this.completeTasks.nativeElement, 'radio-btn-label-selected');
    this.rd.removeClass(this.activeTasks.nativeElement, 'radio-btn-label-selected');
  }

  onCompleteClick() {
    this.onComplete.emit();
    this.rd.addClass(this.completeTasks.nativeElement, 'radio-btn-label-selected');
    this.rd.removeClass(this.allTasks.nativeElement, 'radio-btn-label-selected');
    this.rd.removeClass(this.activeTasks.nativeElement, 'radio-btn-label-selected');
  }

  onActiveClick() {
    this.onActive.emit();
    this.rd.addClass(this.activeTasks.nativeElement, 'radio-btn-label-selected');
    this.rd.removeClass(this.allTasks.nativeElement, 'radio-btn-label-selected');
    this.rd.removeClass(this.completeTasks.nativeElement, 'radio-btn-label-selected');
  }

  ngOnInit() {
    this.onAllClick();
  }

}
