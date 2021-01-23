import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, onErrorResumeNext } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainGuard implements CanActivate {
  constructor(private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (localStorage.getItem("session") !== null && localStorage.getItem("session") !== null) {
        // TODO: Check with the server to see if these are still valid server side!
        return true;
    }

    // TODO: Flash message saying "You need to log in again."
    this.router.navigateByUrl("/home");

    return false;
  }
}