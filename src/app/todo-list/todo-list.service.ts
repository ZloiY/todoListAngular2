import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { environment } from '../../environments/environment';

import { Observable } from 'rxjs';

import { AuthenticationService } from '../authentication/authentication.service';
import { Task } from './shared/task';

@Injectable()
export class TodoListService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private params = new URLSearchParams();
  private token: string;

  constructor(
    private http: Http,
    private authService: AuthenticationService,
  ){}

  getTasks(): Observable<Task[]> {
    this.token = this.authService.getAccessesToken();
    this.params.set('token', this.token);
    return this.http.get(environment.serverUrls.tasksUrl, {search: this.params})
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
      .post(environment.serverUrls.taskUrl, task, {headers: this.headers, search: this.params})
      .map(res => res.json() as Task)
      .catch(this.handleError);
  }

  deleteTask(taskId: number): Observable<Task> {
    const url = `${environment.serverUrls.taskUrl}/${taskId}`;
    return this.http
      .delete(url,  {headers: this.headers, search: this.params})
      .catch(this.handleError);
  }

  updateTask(task: Task): Observable<Task> {
    const url = `${environment.serverUrls.taskUrl}/${task.id}`;
    const updateTask = {
      id: task.id,
      name: task.name,
      complete: task.complete,
    };
    return this.http
      .put(url, updateTask, {headers: this.headers, search: this.params})
      .catch(this.handleError);
  }

  private handleError(error: any): Observable<any> {
    console.error('An error occurred', error);
    return Observable.throw(error.json().error);
  }

}
