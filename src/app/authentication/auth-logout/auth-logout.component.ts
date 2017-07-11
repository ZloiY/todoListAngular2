import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthenticationService } from '../shared/authentication.service';
import { User } from '../user';

@Component({
  selector: 'auth-logout',
  templateUrl: 'auth-logout.component.html',
  styleUrls: ['auth-logout.component.scss']
})
export class AuthLogoutComponent implements OnInit {

  user: User;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthenticationService,
  ) {}

  onLogOutClick() {
    this.authService
      .logout()
      .subscribe(() => this.router.navigate(['/authentication'], { relativeTo: this.route }))
  }

  ngOnInit() {
    this.user = {
      login: '',
      pass:'',
    };
    this.authService
      .getCurrentUser()
      .subscribe((user) => this.user = user);
  }

}
