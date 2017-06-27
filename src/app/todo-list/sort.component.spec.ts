import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListSortComponent } from './sort.component';

describe('TodoListSortComponent', () => {
  let component: TodoListSortComponent;
  let fixture: ComponentFixture<TodoListSortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoListSortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
