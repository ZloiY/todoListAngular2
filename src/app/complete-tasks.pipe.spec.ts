import { CompleteTasksPipe } from './complete-tasks.pipe';
import { Task } from './task';

describe('Complete tasks pipe', () => {
  const completeTasksPipe = new CompleteTasksPipe();
  let inputArr: Task[];
  let outputArr: Task[];

  it('should contain `task2`', () => {
    inputArr = [
      {
        id: 1,
        name: 'task1',
        check: false,
      },
      {
        id: 2,
        name: 'task2',
        check: true,
      }
    ];
    outputArr = [
      {
        id: 2,
        name: 'task2',
        check: true,
      }
    ];
    expect(completeTasksPipe.transform(inputArr)).toEqual(outputArr);
  });
});
