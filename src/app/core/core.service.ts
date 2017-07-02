import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { environment } from '../../environments/environment';

import { Observable } from 'rxjs';

import { Task } from '../todo-list/task';

@Injectable()
export class CoreService {

  private headers = new Headers({'Content-Type': 'application/json'});


  constructor(private http: Http){}

  getTasks(): Observable<Task[]> {
    return this.http.get(environment.serverUrls.tasksUrl)
      .map(response => response.json() as Task[])
      .catch(this.handleError);
  }

  addTask(taskName: string): Observable<Task> {
    const task = {
      id: 0,
      name: taskName,
      complete: false,
    };
    return this.http
      .post(environment.serverUrls.taskUrl, task, {headers: this.headers})
      .map(res => res.json() as Task)
      .catch(this.handleError);
  }

  deleteTask(taskId: number): Observable<Task> {
    const url = `${environment.serverUrls.taskUrl}/${taskId}`;
    return this.http
      .delete(url, {headers: this.headers})
      .map(() => null)
      .catch(this.handleError);
  }

  updateTask(task: Task): Observable<Task> {
    const url = `${environment.serverUrls.taskUrl}/${task.id}`;
    return this.http
      .put(url, task, {headers: this.headers})
      .map(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Observable<any> {
    console.error('An error occurred', error);
    return Observable.throw(error.json().error);
  }

}
