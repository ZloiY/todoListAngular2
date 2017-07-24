import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';

import { AuthenticationService } from './authentication.service';

@Injectable()
export class AuthActivate implements CanActivate {

  constructor(private authService: AuthenticationService) {}

  canActivate() :boolean {
    return !this.authService.isLoggedIn();
  }
}