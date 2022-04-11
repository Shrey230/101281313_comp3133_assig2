import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public user: any;

  constructor() {}
  isLoggedIn: boolean = false;

  public login(isValid: boolean, user: any) {
    if (isValid) {
      this.isLoggedIn = true;
      localStorage.setItem('user_id', user._id);
      localStorage.setItem('username', user.username);
      localStorage.setItem('isLoggedIn', this.isLoggedIn ? 'true' : 'false');
    }
  }

  logout() {
    this.isLoggedIn = false;
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    localStorage.removeItem('user_id');
  }

  isValid(): boolean {
    let data = localStorage.getItem('isLoggedIn');

    if (data != null && data == 'true') {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
    return this.isLoggedIn;
  }
}
