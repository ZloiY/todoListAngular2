import { TodoListAngular2Page } from './app.po';

describe('todo-list-angular2 App', () => {
  let page: TodoListAngular2Page;

  beforeEach(() => {
    page = new TodoListAngular2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
