import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListToggleTasksDelChecked } from './tdlist-taskscheck-delchecked.component';

describe('TodoListToggleTasksDelChecked', () => {
  let component: TodoListToggleTasksDelChecked;
  let fixture: ComponentFixture<TodoListToggleTasksDelChecked>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoListToggleTasksDelChecked ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListToggleTasksDelChecked);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
