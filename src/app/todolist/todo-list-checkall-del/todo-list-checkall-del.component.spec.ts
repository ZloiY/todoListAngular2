import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListCheckallDelComponent } from './todo-list-checkall-del.component';

describe('TodoListCheckallDelComponent', () => {
  let component: TodoListCheckallDelComponent;
  let fixture: ComponentFixture<TodoListCheckallDelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoListCheckallDelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListCheckallDelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
