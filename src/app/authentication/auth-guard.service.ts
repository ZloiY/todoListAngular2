import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthenticationService } from './shared/authentication.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthenticationService) {}

  canActivate(): boolean {
    return this.authService.loggedIn;
  }
}