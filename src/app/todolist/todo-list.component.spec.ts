import {TestBed, ComponentFixture} from '@angular/core/testing';
import {TodoListComponent} from './todo-list.component';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';
import {CompleteTasksPipe} from './pipes/todo-list.complete-tasks.pipe';
import {ActiveTasksPipe} from './pipes/todo-list.active-tasks.pipe';
describe('ToDoListComponent', () => {

  let testComp: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;
  let debug: DebugElement;
  let element: HTMLElement;
  let inputElement: HTMLInputElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TodoListComponent,
        CompleteTasksPipe,
        ActiveTasksPipe
      ],
    });
    fixture = TestBed.createComponent(TodoListComponent);
    testComp = fixture.componentInstance;
  });

  it('should display title `Akveo ToDoList`', () => {
    debug = fixture.debugElement.query(By.css('h1'));
    element = debug.nativeElement;
    expect(element.textContent).toEqual('Akveo ToDoList');
  });
  it('should be empty input field', () => {
    debug = fixture.debugElement.query(By.css('.input-new-task'));
    inputElement = debug.nativeElement;
    expect(inputElement.textContent).toEqual('');
  });
  it('should button value equal to `Add`', () => {
    debug = fixture.debugElement.query(By.css('.add-new-task-btn'));
    inputElement = debug.nativeElement;
    expect(inputElement.value).toEqual('Add');
  });
  it('should contain `All` in allTaskLabel', () => {
    debug = fixture.debugElement.query(By.css('.radio-btn-label'));
    element = debug.nativeElement;
    expect(element.textContent).toEqual('All');
  });
  it('should button value equal to `Check/Uncheck All`', () => {
    debug = fixture.debugElement.query(By.css('.task_check-uncheck-btn'));
    inputElement = debug.nativeElement;
    expect(inputElement.value).toEqual('Check/Uncheck All');
  });
  it('should button value equal to `Delete complete tasks`', () => {
    debug = fixture.debugElement.query(By.css('.del-checked-btn'));
    inputElement = debug.nativeElement;
    expect(inputElement.value).toEqual('Delete complete tasks');
  });
  it('should contain `Active tasks: ` in activeItems', () => {
    debug = fixture.debugElement.query(By.css('.active-tasks'));
    element = debug.nativeElement;
    expect(element.textContent).toEqual('Active tasks: ');
  });
});
