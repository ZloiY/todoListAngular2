import {Injectable, OnInit} from '@angular/core';
import { Http, Headers } from '@angular/http';
import { environment } from '../../environments/environment';

import { Observable } from 'rxjs';

import { User } from './user';

@Injectable()
export class AuthenticationService implements OnInit{

  private headers = new Headers({'Content-Type': 'application/json'});
  loggedIn: boolean;

  constructor(private http: Http) {}

  registration(user: User): Observable<User> {
    return this.http
      .post(environment.serverUrls.authenticationUrl, user, {headers: this.headers})
      .map(() => null)
      .catch(this.handleError);
  }

  authentication(user: User): Observable<User> {
    return this.http
      .post(environment.serverUrls.authenticationUrl, user, {headers: this.headers})
      .map(() => this.loggedIn = true)
      .catch(this.handleError);
  }

  logout(user: User): Observable<User> {
    return this.http
      .post(environment.serverUrls.logoutUrl, user, {headers: this.headers})
      .map(() => this.loggedIn = false)
      .catch(this.handleError)
  }

  getCurrentUser(): Observable<User> {
    return this.http.get(environment.serverUrls.userUrl)
      .map((user) => user.json() as User)
      .catch(this.handleError)
  }

  private handleError(error: any): Observable<any> {
    console.error('An error occurred', error);
    return Observable.throw(error.json().error);
  }

  ngOnInit() {
    this.loggedIn = false;
  }

}
