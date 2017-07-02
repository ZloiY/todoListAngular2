import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { environment } from '../../environments/environment';

import 'rxjs/add/operator/toPromise';

import { Task } from '../todo-list/task';

@Injectable()
export class CoreService {

  private headers = new Headers({'Content-Type': 'application/json'});


  constructor(private http: Http){}

  getTasks(): Promise<Task[]> {
    return this.http.get(environment.serverUrls.tasksUrl)
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
      .post(environment.serverUrls.taskUrl, task, {headers: this.headers})
      .toPromise()
      .then(res => res.json() as Task)
      .catch(this.handleError);
  }

  deleteTask(taskId: number): Promise<Task> {
    const url = `${environment.serverUrls.taskUrl}/${taskId}`;
    return this.http
      .delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  updateTask(task: Task): Promise<Task> {
    const url = `${environment.serverUrls.taskUrl}/${task.id}`;
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
