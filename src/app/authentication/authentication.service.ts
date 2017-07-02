import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import * as urls from '../../config.json';
import { User } from './user';

@Injectable()
export class AuthenticationService {

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {}

  registration(user: User): Promise<User> {
    return this.http
      .post((<any>urls).authenticationUrl, user, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  authentication(user: User): Promise<User> {
    return this.http
      .post((<any>urls).authenticationUrl, user, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  logout(user: User): Promise<User> {
    return this.http
      .post((<any>urls).logoutUrl, user, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError)
  }

  getCurrentUser(): Promise<User> {
    return this.http.get((<any>urls).userUrl)
      .toPromise()
      .then((user) => user.json() as User)
      .catch(this.handleError)
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
