import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../core/task.model';

@Pipe({
  name: 'activeTasks',
  pure: false,
})
export class ActiveTasksPipe implements PipeTransform {

  transform(tasks: Task[]) {
      return tasks.filter((task) => !task.complete);
  }
}
