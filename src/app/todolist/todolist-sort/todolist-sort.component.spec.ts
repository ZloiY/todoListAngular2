import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodolistSortComponent } from './todolist-sort.component';

describe('TodolistSortComponent', () => {
  let component: TodolistSortComponent;
  let fixture: ComponentFixture<TodolistSortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodolistSortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodolistSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
