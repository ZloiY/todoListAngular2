import { Injectable } from '@angular/core';
import {CanActivate, CanLoad} from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

  constructor(private authService: AuthenticationService) {}

  canActivate(): boolean {
    return this.authService.isLoggedIn();
  }

  canLoad(): boolean {
    return !this.authService.isLoggedIn();
  }
}