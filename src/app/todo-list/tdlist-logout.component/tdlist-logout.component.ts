import { Component, OnInit } from '@angular/core';
import { LogoutService } from './tdlist-logout.service';
import { Router, ActivatedRoute } from '@angular/router';

import { User } from "../../identification/user";

@Component({
  selector: 'tdlist-logout',
  templateUrl: 'tdlist-logout.component.html',
  styleUrls: ['tdlist-logout.component.scss']
})
export class TodoListLogoutComponent implements OnInit {

  user: User;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private logoutService: LogoutService,
  ) {}

  onLogOutClick() {
    this.logoutService
      .logout(this.user)
      .then(() => this.router.navigate(['/identification'], { relativeTo: this.route }))
  }

  ngOnInit() {
    this.user = {
      login: '',
      pass:'',
    };
    this.logoutService
      .getCurrentUser()
      .then((user) => this.user = user);
  }

}
