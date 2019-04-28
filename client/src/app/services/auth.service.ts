import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { User } from '@models/User';

@Injectable({ providedIn: 'root' })
export class AuthService {
  public static login(userName: string, password: string): Observable<User> {
    return of({ user: userName } as User);
  }
}
