import { CompleteTasksPipe } from './todo-list.complete-tasks.pipe';
import { Task } from '../task';

describe('Complete tasks pipe', () => {
  const completeTasksPipe = new CompleteTasksPipe();
  let inputArr: Task[];
  let outputArr: Task[];

  it('should contain `task2`', () => {
    inputArr = [
      {
        name: 'task1',
        check: false,
      },
      {
        name: 'task2',
        check: true,
      }
    ];
    outputArr = [
      {
        name: 'task2',
        check: true,
      }
    ];
    expect(completeTasksPipe.transform(inputArr)).toEqual(outputArr);
  });
});
