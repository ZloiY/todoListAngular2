import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListLogoutComponent } from './tdlist-logout.component';

describe('TodoListLogoutComponent', () => {
  let component: TodoListLogoutComponent;
  let fixture: ComponentFixture<TodoListLogoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoListLogoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
