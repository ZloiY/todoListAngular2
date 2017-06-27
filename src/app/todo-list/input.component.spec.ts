import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListInputComponent } from './input.component';

describe('TodoListInputComponent', () => {
  let component: TodoListInputComponent;
  let fixture: ComponentFixture<TodoListInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoListInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
