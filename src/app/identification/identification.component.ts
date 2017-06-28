import { Component, OnInit } from '@angular/core';
import { IdentificationService } from './identification.service';
import {Router, ActivatedRoute} from '@angular/router';

import { User } from './user';
import { md5 } from '../../../hash/md5';

@Component({
  selector: 'identification',
  templateUrl: 'identification.component.html',
  styleUrls: ['identification.component.scss']
})
export class IdentificationComponent implements OnInit {

  private user: User;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private idService: IdentificationService,
  ) {}


  logging(login, password) {
    if (login.length === 0 || password.length === 0) {
      window.alert('You must entry email and password');
      return;
    }
    this.user.login = login;
    this.user.pass = md5(password);
    this.idService.authentication(this.user)
      .then(() => this.goingtoTodoList());
  }

  goingtoTodoList() {
    this.router.navigate(['./tdlist'], {relativeTo: this.route});
  }

  registration(login, password) {
    if (login.length === 0 || password.length === 0) {
      window.alert('You must entry email and password');
      return;
    }
    this.user.login = login;
    this.user.pass = md5(password);
    this.idService.registration(this.user)
      .then(() => this.goingtoTodoList());
  }

  ngOnInit() {
    this.user = {login:'', pass:''};
  }

}
