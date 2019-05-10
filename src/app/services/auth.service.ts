import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { User } from '@models/User';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private isLoggedInStatus = false;

  public login(userName: string, password: string): Observable<User> {
    this.isLoggedInStatus = true;
    return of({ user: userName } as User);
  }

  public isLoggedIn(): boolean {
    return this.isLoggedInStatus;
  }
}
