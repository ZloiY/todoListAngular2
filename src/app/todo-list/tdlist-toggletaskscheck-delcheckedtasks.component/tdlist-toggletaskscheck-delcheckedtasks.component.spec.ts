import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListToggleTasksCheckDelCheckedTasks } from './tdlist-toggletaskscheck-delcheckedtasks.component';

describe('TodoListToggleTasksCheckDelCheckedTasks', () => {
  let component: TodoListToggleTasksCheckDelCheckedTasks;
  let fixture: ComponentFixture<TodoListToggleTasksCheckDelCheckedTasks>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoListToggleTasksCheckDelCheckedTasks ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListToggleTasksCheckDelCheckedTasks);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
