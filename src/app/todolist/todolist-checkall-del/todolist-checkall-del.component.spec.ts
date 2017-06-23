import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodolistCheckallDelComponent } from './todolist-checkall-del.component';

describe('TodolistCheckallDelComponent', () => {
  let component: TodolistCheckallDelComponent;
  let fixture: ComponentFixture<TodolistCheckallDelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodolistCheckallDelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodolistCheckallDelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
