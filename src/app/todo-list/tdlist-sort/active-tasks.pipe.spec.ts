import { ActiveTasksPipe } from './active-tasks.pipe';
import { Task } from '../task';

describe('Active tasks pipe', () => {
  const activeTasksPipe = new ActiveTasksPipe();
  let inputArr: Task[];
  let outputArr: Task[];

  it('should contain `task1', () => {
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
        id: 1,
        name: 'task1',
        complete: false,
      }
    ];
    expect(activeTasksPipe.transform(inputArr)).toEqual(outputArr);
  });
});
