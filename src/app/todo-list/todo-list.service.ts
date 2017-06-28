import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Task } from './task';

@Injectable()
export class TodoListService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private tasksUrl = 'http://localhost:9000/tasks';
  private taskUrl = 'http://localhost:9000/tasks/task';

  constructor(private http: Http){}

  getTasks(): Promise<Task[]> {
    return this.http.get(this.tasksUrl)
      .toPromise()
      .then(response => response.json() as Task[])
      .catch(this.handleError);
  }

  addTask(taskName: string): Promise<Task> {
    const task = {
      id: 0,
      name: taskName,
      complete: false,
    };
    return this.http
      .post(this.taskUrl, JSON.stringify(task), {headers: this.headers})
      .toPromise()
      .then(res => res.json() as Task)
      .catch(this.handleError);
  }

  deleteTask(taskId: number): Promise<Task> {
    const url = `${this.taskUrl}/${taskId}`;
    return this.http
      .delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  updateTask(task: Task): Promise<Task> {
    const url = `${this.taskUrl}/${task.id}`;
    return this.http
      .put(url, JSON.stringify(task), {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
