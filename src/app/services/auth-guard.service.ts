import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router'

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private AuthService: AuthService) { }

  canActivate() {
    if (this.AuthService.isLoggedIn()) return true;

    this.router.navigate(['/login']);
    return false;
  }

}
