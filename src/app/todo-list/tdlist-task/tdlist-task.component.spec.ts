import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListTaskElementComponent } from './tdlist-task.component';

describe('TodoListTaskElementComponent', () => {
  let component: TodoListTaskElementComponent;
  let fixture: ComponentFixture<TodoListTaskElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoListTaskElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListTaskElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
