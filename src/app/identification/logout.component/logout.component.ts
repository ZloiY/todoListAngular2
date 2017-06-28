import { Component, OnInit } from '@angular/core';
import { LogoutService } from './logout.service';
import { Router, ActivatedRoute } from '@angular/router';

import { User } from "../user";

@Component({
  selector: 'logout-component',
  templateUrl: 'logout.component.html',
  styleUrls: ['logout.component.scss']
})
export class LogoutComponent implements OnInit {

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
