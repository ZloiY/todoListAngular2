import { Injectable, OnInit } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { environment } from '../../environments/environment';

import { Observable } from 'rxjs';

import { User } from './user';

@Injectable()
export class AuthenticationService implements OnInit{

  private headers = new Headers({'Content-Type': 'application/json'});
  private params = new URLSearchParams();
  private token: string;
  loggedIn: boolean;
  
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
      this.loggedIn = true;
      this.token = token.json() as string;
      this.params.set('token', this.token);
      })
      .catch(this.handleError);
  }

  logout(): Observable<User> {
    return this.http
      .post(environment.serverUrls.logoutUrl, null, {headers: this.headers, search: this.params})
      .map(() => {
        this.loggedIn = false;
        this.token = '';
      })
      .catch(this.handleError)
  }

  getCurrentUser(): Observable<User> {
    return this.http.get(environment.serverUrls.userUrl, {search: this.params})
      .map((user) => user.json() as User)
      .catch(this.handleError)
  }

  getAccessesToken() {
    return this.token;
  }

  private handleError(error: any): Observable<any> {
    console.error('An error occurred', error);
    return Observable.throw(error.json().error);
  }

  ngOnInit() {
    this.loggedIn = false;
  }

}
