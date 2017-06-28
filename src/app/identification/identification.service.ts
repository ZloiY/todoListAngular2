import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { User } from './user';

@Injectable()
export class IdentificationService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private registrationUrl = 'http://localhost:9000/user';
  private authenticationUrl = 'http://localhost:9000/user/login';

  constructor(private http: Http) {}

  registration(user: User): Promise<User> {
    return this.http
      .post(this.registrationUrl, JSON.stringify(user), {headers: this.headers})
      .toPromise()
      .then((user) => null)
      .catch(this.handleError);
  }

  authentication(user: User): Promise<User> {
    return this.http
      .post(this.authenticationUrl, JSON.stringify(user), {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
