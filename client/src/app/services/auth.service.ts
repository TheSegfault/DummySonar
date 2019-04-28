import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

// TODO: Move this to a model file
export interface User {
  user: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  public static login(userName: string, password: string): Observable<User> {
    return of({ user: userName } as User);
  }
}
