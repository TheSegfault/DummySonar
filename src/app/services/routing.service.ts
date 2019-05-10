import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class RoutingService {

  private homeUrl = '/';
  private loginUrl = '/login';

  constructor(private router: Router) {
  }

  navigateToHome(): void {
    this.router.navigateByUrl(this.homeUrl);
  }

  navigateToLogin(): void {
    this.router.navigateByUrl(this.loginUrl);
  }

}
