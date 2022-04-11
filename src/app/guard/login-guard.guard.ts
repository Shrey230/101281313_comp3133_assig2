import { invalid } from '@angular/compiler/src/render3/view/util';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {

  constructor(private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkLogin()
  }

  checkLogin(): true | UrlTree{
    let val = localStorage.getItem('isLoggedIn')
    if(val != null && val == "true"){
      return true
    }
    alert("Invalid Login")
    return this.router.parseUrl('/login')
  }
}
