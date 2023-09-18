import { Injectable } from '@angular/core';
import { Params, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedIn = localStorage.getItem('token') ? true : false;
  private isPending = false;

  private readonly BASE_URL = 'http://' + location.hostname + ':9999';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'my-auth-token',
    }),
  };

  constructor(
    private router: Router,
    private http: HttpClient,
  ) {}

  login(username: Params) {
    this.http
      .post(this.BASE_URL + '/auth', username, this.httpOptions)
      .subscribe(res => console.log(res));
    // localStorage.setItem('token', '123');
    // this.isLoggedIn = true;
    // this.router.navigate(['/']);
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
