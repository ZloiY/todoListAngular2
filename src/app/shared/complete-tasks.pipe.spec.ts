import { CompleteTasksPipe } from './complete-tasks.pipe';
import { Task } from '../core/task.model';

describe('Complete tasks pipe', () => {
  const completeTasksPipe = new CompleteTasksPipe();
  let inputArr: Task[];
  let outputArr: Task[];

  it('should contain `task2`', () => {
    inputArr = [
      {
        id: 1,
        name: 'task1',
        complete: false,
      },
      {
        id: 2,
        name: 'task2',
        complete: true,
      }
    ];
    outputArr = [
      {
        id: 2,
        name: 'task2',
        complete: true,
      }
    ];
    expect(completeTasksPipe.transform(inputArr)).toEqual(outputArr);
  });
});
