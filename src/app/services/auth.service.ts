import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedIn = localStorage.getItem('token') ? true : false;
  private isPending = false;

  constructor(private router: Router) {}

  login() {
    localStorage.setItem('token', '123');
    this.isLoggedIn = true;
    this.router.navigate(['/']);
  }

  logout() {
    localStorage.removeItem('token');
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }

  isAuthenticated() {
    return this.isLoggedIn;
  }
}
