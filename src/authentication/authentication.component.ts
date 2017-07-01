import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthenticationService } from './authentication.service';
import { User } from './user';

@Component({
  selector: 'authentication',
  templateUrl: 'authentication.component.html',
  styleUrls: ['authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  private user: User;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthenticationService,
  ) {}


  logging(login, password) {
    if (login.length === 0 || password.length === 0) {
      window.alert('You must entry email and password');
      return;
    }
    this.user.login = login;
    this.user.pass = password;
    this.authService.authentication(this.user)
      .then(() => this.router.navigate(['./complete'], {relativeTo: this.route}));
  }

  registration() {
    this.router.navigate(['/registration'], {relativeTo: this.route})
  }

  ngOnInit() {
    this.user = {login:'', pass:''};
  }

}
