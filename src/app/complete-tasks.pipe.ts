import { Pipe, PipeTransform } from '@angular/core';
import { Task } from './task';

@Pipe({
  name: 'completeTasks',
  pure: false
})
export class CompleteTasksPipe implements PipeTransform {

  transform(tasks: Task[]) {
      return tasks.filter((task) => task.check);
  }
}
