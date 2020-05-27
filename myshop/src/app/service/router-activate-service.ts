import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth-service';



@Injectable()
export class AuthRouterActivateService implements CanActivate {

  constructor(private auth: AuthService, private route: Router) { }

  canActivate(route: ActivatedRouteSnapshot) {

    console.log(route)

    if (!this.auth.isAuthenticated) {

      this.route.navigateByUrl("login");

      return true;
    }
    return true;

  }
}



