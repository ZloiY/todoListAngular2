import { Injectable, OnInit } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { environment } from '../../environments/environment';

import { Observable } from 'rxjs';
import {User} from "../core/user.model";

@Injectable()
export class AuthenticationService implements OnInit {

  ngOnInit() {}

  private headers = new Headers({'Content-Type': 'application/json'});
  private params = new URLSearchParams();
  
  constructor(private http: Http) {}

  registration(user: User): Observable<User> {
    return this.http
      .post(environment.serverUrls.registrationUrl, user, {headers: this.headers})
      .map(() => null)
      .catch(this.handleError);
  }

  authentication(user: User): Observable<string> {
    return this.http
      .post(environment.serverUrls.authenticationUrl, user, {headers: this.headers})
      .map((token) => {
      localStorage.setItem('token', token.json() as string);
      this.params.set('token', token.json() as string);
      })
      .catch(this.handleError);
  }

  logout(): Observable<User> {
    return this.http
      .post(environment.serverUrls.logoutUrl, null, {headers: this.headers, search: this.params})
      .map(() => {
        localStorage.clear();
      })
      .catch(this.handleError)
  }

  getCurrentUser(): Observable<User> {
    this.params.set('token', localStorage.getItem('token'));
    return this.http.get(environment.serverUrls.userUrl, {search: this.params})
      .map((user) => user.json() as User)
      .catch(this.handleError)
  }

  getAccessesToken() {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    if (localStorage.getItem('token')) {
      return true;
    }
    return false;
  }

  private handleError(error: any): Observable<any> {
    console.error('An error occurred', error);
    return Observable.throw(error.json().error);
  }

}
