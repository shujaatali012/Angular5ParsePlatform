import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild, NavigationExtras, CanLoad, Route } from '@angular/router';

import { ParseService } from "./parse.service";

@Injectable()
export class AuthenticationGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(private parseService: ParseService, private router: Router) {
  }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;
    return this.checkLogin(url);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }

  canLoad(route: Route): boolean {
    let url = `/${route.path}`;
    return this.checkLogin(url);
  }
  
  // check is user loggedin
  checkLogin(url: string): boolean {
    //let _path = url.split('/')[1];

    if (this.parseService.isLoggedIn()) {
      return true;
    }

    this.router.navigate(['/login']);

    return false;
  }
}
