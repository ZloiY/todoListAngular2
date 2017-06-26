import {browser, element, by, protractor} from 'protractor';

describe('todo-list-angular2 App', () => {

  beforeEach(() => {
    browser.get('/');
  });

  it('should display welcome message', () => {
    const header = element(by.css('.akveo-label')).getText();
    expect(header).toEqual('Akveo ToDoList');
  });
  it('should show alert when add pressed and input empty', () => {
    const addBtn = element(by.css('.add-task-btn'));
    const EC = protractor.ExpectedConditions;
    addBtn.click();
    browser.wait(EC.alertIsPresent(), 400, 'You must entry task name.');
    browser.switchTo().alert().accept().then(null, function(e) {
    });
  });
  it('should increase item counter by one if item added', () => {
    const addBtn = element(by.css('.add-task-btn'));
    const input = element(by.css('.input-new-task-name'));
    const activeItems = element(by.css('.active-tasks-label'));
    input.sendKeys('task');
    addBtn.click();
    expect(activeItems.getText()).toBe('Active tasks: 1');
  });
  it('should decrease active items when checkbox checked', () => {
    const addBtn = element(by.css('.add-task-btn'));
    const input = element(by.css('.input-new-task-name'));
    const activeItems = element(by.css('.active-tasks-label'));
    input.sendKeys('task');
    addBtn.click();
    element(by.css('.task-list-element')).click();
    expect(activeItems.getText()).toBe('Active tasks: 0');
  });
  it('should decrease active items if task delete and checkbox unchecked', () => {
    const addBtn = element(by.css('.add-task-btn'));
    const input = element(by.css('.input-new-task-name'));
    const activeItems = element(by.css('.active-tasks-label'));
    input.sendKeys('task');
    addBtn.click();
    const closeBtn = element(by.css('.task-close-btn'));
    closeBtn.click();
    expect(activeItems.getText()).toBe('Active tasks: 0');
  });
  it('shouldn`t decrease active items more if checkbox checked and close btn clicked', () => {
    const addBtn = element(by.css('.add-task-btn'));
    const input = element(by.css('.input-new-task-name'));
    const activeItems = element(by.css('.active-tasks-label'));
    input.sendKeys('task');
    addBtn.click();
    const tasksCheck = element(by.css('.task-list-element'));
    tasksCheck.click();
    expect(activeItems.getText()).toBe('Active tasks: 0');
    const closeBtn = element(by.css('.task-close-btn'));
    closeBtn.click();
    expect(activeItems.getText()).toBe('Active tasks: 0');
  });
  it('should task_check all items when button pressed first time and active items must be equal 0', () => {
    const addBtn = element(by.css('.add-task-btn'));
    const input = element(by.css('.input-new-task-name'));
    const activeItems = element(by.css('.active-tasks-label'));
    const checkUncheckBtn = element(by.css('.task_check-uncheck-btn'));
    input.sendKeys('task1');
    addBtn.click();
    input.sendKeys('task2');
    addBtn.click();
    input.sendKeys('task3');
    addBtn.click();
    input.sendKeys('task4');
    addBtn.click();
    checkUncheckBtn.click();
    const tasksCheck = element(by.css('.task-checkbox'));
    function checkChecks() {
      for (let checkId = 0; checkId < tasksCheck.length; checkId += 1) {
        if (tasksCheck[checkId] !== true) {
          return false;
        }
      }
      return true;
    }
    expect(checkChecks()).toBe(true);
    expect(activeItems.getText()).toBe('Active tasks: 0');
  });
  it('should uncheck all if task_check/uncheck button pressed again', () => {
    const addBtn = element(by.css('.add-task-btn'));
    const input = element(by.css('.input-new-task-name'));
    const activeItems = element(by.css('.active-tasks-label'));
    const checkUncheckBtn = element(by.css('.task_check-uncheck-btn'));
    input.sendKeys('task1');
    addBtn.click();
    input.sendKeys('task2');
    addBtn.click();
    input.sendKeys('task3');
    addBtn.click();
    input.sendKeys('task4');
    addBtn.click();
    checkUncheckBtn.click();
    checkUncheckBtn.click();
    const tasksCheck = element(by.css('.task-checkbox'));
    function checkChecks() {
      for (let checkId = 0; checkId < tasksCheck.length; checkId += 1) {
        if (tasksCheck[checkId] !== false) {
          return true;
        }
      }
      return false;
    }
    expect(checkChecks()).toBe(false);
    expect(activeItems.getText()).toBe('Active tasks: 4');
  });
  it('should task_check all elements if one of them already checked', () => {
    const addBtn = element(by.css('.add-task-btn'));
    const input = element(by.css('.input-new-task-name'));
    const activeItems = element(by.css('.active-tasks-label'));
    const checkUncheckBtn = element(by.css('.task_check-uncheck-btn'));
    input.sendKeys('task1');
    addBtn.click();
    element(by.css('.task-list-element')).click();
    input.sendKeys('task2');
    addBtn.click();
    input.sendKeys('task3');
    addBtn.click();
    input.sendKeys('task4');
    addBtn.click();
    checkUncheckBtn.click();
    const tasksCheck = element.all(by.css('.task_check-uncheck-btn'));
    function checkChecks() {
      let allTrue = true;
      tasksCheck.each((task) => {
        if (task.check !== true) {
          allTrue = false
        }
      });
      return allTrue;
    }
    expect(checkChecks()).toBe(true);
    expect(activeItems.getText()).toBe('Active tasks: 0');
  });
  it('should uncheck all elements if task_check/uncheck btn pressed and one of them is uncheck', () => {
    const addBtn = element(by.css('.add-task-btn'));
    const input = element(by.css('.input-new-task-name'));
    const activeItems = element(by.css('.active-tasks-label'));
    const checkUncheckBtn = element(by.css('.task_check-uncheck-btn'));
    input.sendKeys('task1');
    addBtn.click();
    input.sendKeys('task2');
    addBtn.click();
    input.sendKeys('task3');
    addBtn.click();
    input.sendKeys('task4');
    addBtn.click();
    checkUncheckBtn.click();
    const tasksCheck = element.all(by.css('.task-list-element'));
    tasksCheck.get(1).click();
    checkUncheckBtn.click();
    function checkChecks() {
      let allFalse = false;
      tasksCheck.each((task) => {
        if (task.check !== false) {
          allFalse = true;
        }
      });
      return allFalse;
    }
    expect(checkChecks()).toBe(false);
    expect(activeItems.getText()).toBe('Active tasks: 4');
  });
  it('should delete all checked item if del btn pressed', () => {
    const addBtn = element(by.css('.add-task-btn'));
    const input = element(by.css('.input-new-task-name'));
    const checkUncheckBtn = element(by.css('.task_check-uncheck-btn'));
    const delCheckBtn = element(by.css('.del-checked-btn'));
    const tasks = element.all(by.css('.tasks .name'));
    input.sendKeys('task1');
    addBtn.click();
    input.sendKeys('task2');
    addBtn.click();
    input.sendKeys('task3');
    addBtn.click();
    input.sendKeys('task4');
    addBtn.click();
    function getName() {
      return tasks.map((elem) => {
        return elem.getText();
      });
    }
    checkUncheckBtn.click();
    delCheckBtn.click();
    expect(getName()).toEqual([]);
  });
  it('should delete only checked items if del btn pressed', () => {
    const addBtn = element(by.css('.add-task-btn'));
    const input = element(by.css('.input-new-task-name'));
    const delCheckBtn = element(by.css('.del-checked-btn'));
    const tasks = element.all(by.css('.task-list-element'));
    input.sendKeys('task1');
    addBtn.click();
    input.sendKeys('task2');
    addBtn.click();
    input.sendKeys('task3');
    addBtn.click();
    input.sendKeys('task4');
    addBtn.click();
    const tasksCheck = element.all(by.css('.task-list-element'));
    tasksCheck.get(0).click();
    tasksCheck.get(3).click();
    delCheckBtn.click();
    function getName() {
      return tasks.map((elem) => {
        return elem.getText();
      });
    }
    expect(getName()).toEqual(['task2', 'task3']);
  });
  it('shouldn`t delete unchecked elements if del btn pressed', () => {
    const addBtn = element(by.css('.add-task-btn'));
    const input = element(by.css('.input-new-task-name'));
    const delCheckBtn = element(by.css('.del-checked-btn'));
    const tasks = element.all(by.css('.task-list-element'));
    input.sendKeys('task1');
    addBtn.click();
    input.sendKeys('task2');
    addBtn.click();
    input.sendKeys('task3');
    addBtn.click();
    input.sendKeys('task4');
    addBtn.click();
    delCheckBtn.click();
    function getName() {
      return tasks.map((elem) => {
        return elem.getText();
      });
    }
    expect(getName()).toEqual(['task1', 'task2', 'task3', 'task4']);
  });
});
