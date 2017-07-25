import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthenticationService } from "../authentication.service";
import { User } from '../../core/user.model';

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

  ngOnInit() {
    this.user = new User();
    this.authService
      .getCurrentUser()
      .subscribe((user) => this.user = user);
  }

  onLogOutClick() {
    this.authService
      .logout()
      .subscribe(() => this.router.navigate([''], { relativeTo: this.route }))
  }

}
