import { ActiveTasksPipe } from './todo-list.active-tasks.pipe';
import { Task } from '../task';

describe('Active tasks pipe', () => {
  const activeTasksPipe = new ActiveTasksPipe();
  let inputArr: Task[];
  let outputArr: Task[];

  it('should contain `task1', () => {
    inputArr = [
      {
        name: 'task1',
        task_check: false,
      },
      {
        name: 'task2',
        task_check: true,
      }
    ];
    outputArr = [
      {
        name: 'task1',
        task_check: false,
      }
    ];
    expect(activeTasksPipe.transform(inputArr)).toEqual(outputArr);
  });
});
