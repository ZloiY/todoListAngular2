import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { User } from '../../identification/user';

@Injectable()
export class LogoutService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private logoutUrl = 'http://localhost:9000/user/logout';
  private userUrl = 'http://localhost:9000/user';

  constructor(private http: Http) {}

  logout(user: User): Promise<User> {
    return this.http
      .post(this.logoutUrl, JSON.stringify(user), {headers: this.headers})
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
