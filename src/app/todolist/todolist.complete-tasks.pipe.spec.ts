import {Task} from "../task";
import {CompleteTasksPipe} from "./todolist.complete-tasks.pipe";

describe('Complete tasks pipe', () => {
  let completeTasksPipe = new CompleteTasksPipe();
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