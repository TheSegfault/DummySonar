import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from '@services/auth.service';
import { RoutingService } from '@services/routing.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authenticationService: AuthService,
    private routerService: RoutingService
  ) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const isLoggedIn = this.authenticationService.isLoggedIn();

    if (!isLoggedIn) {
      this.routerService.navigateToLogin();
    }

    return isLoggedIn;
  }
}
