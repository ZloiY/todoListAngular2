import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { User } from './user';

@Injectable()
export class AuthenticationService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private registrationUrl = 'http://localhost:9000/user';
  private authenticationUrl = 'http://localhost:9000/user/login';
  private logoutUrl = 'http://localhost:9000/user/logout';
  private userUrl = 'http://localhost:9000/user';


  constructor(private http: Http) {}

  registration(user: User): Promise<User> {
    return this.http
      .post(this.registrationUrl, user, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  authentication(user: User): Promise<User> {
    return this.http
      .post(this.authenticationUrl, user, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  logout(user: User): Promise<User> {
    return this.http
      .post(this.logoutUrl, user, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError)
  }

  getCurrentUser(): Promise<User> {
    return this.http.get(this.userUrl)
      .toPromise()
      .then((user) => user.json() as User)
      .catch(this.handleError)
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
