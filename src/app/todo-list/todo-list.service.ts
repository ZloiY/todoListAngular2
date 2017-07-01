import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Task } from './task';
import * as urls from '../../config.json';

@Injectable()
export class TodoListService {

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http){}

  getTasks(): Promise<Task[]> {
    return this.http.get((<any>urls).tasksUrl)
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
      .post((<any>urls).taskUrl, task, {headers: this.headers})
      .toPromise()
      .then(res => res.json() as Task)
      .catch(this.handleError);
  }

  deleteTask(taskId: number): Promise<Task> {
    const url = `${(<any>urls).taskUrl}/${taskId}`;
    return this.http
      .delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  updateTask(task: Task): Promise<Task> {
    const url = `${(<any>urls).taskUrl}/${task.id}`;
    return this.http
      .put(url, task, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
