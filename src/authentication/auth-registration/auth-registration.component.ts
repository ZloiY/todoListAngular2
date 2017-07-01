import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthenticationService } from '../authentication.service';
import { User } from '../user';

@Component({
  selector: 'app-auth-registration',
  templateUrl: 'auth-registration.component.html',
  styleUrls: ['auth-registration.component.scss']
})
export class AuthRegistrationComponent implements OnInit {

  private user: User;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthenticationService,
  ) {}

  registration(login, password, repPassword) {
    if (login.length === 0 || password.length === 0 || password !== repPassword) {
      window.alert('You must entry email and password');
      return;
    }
    this.user.login = login;
    this.user.pass = password;
    this.authService.registration(this.user)
      .then(() => this.router.navigate(['/authentication'], {relativeTo: this.route}));
  }


  ngOnInit() {
    this.user = {login:'', pass:''};
  }

}
