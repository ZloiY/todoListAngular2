import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodolistTaskelementComponent } from './todolist-taskelement.component';

describe('TodolistTaskelementComponent', () => {
  let component: TodolistTaskelementComponent;
  let fixture: ComponentFixture<TodolistTaskelementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodolistTaskelementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodolistTaskelementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
