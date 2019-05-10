import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { AuthService } from '@services/auth.service';

import { RoutingService } from '@services/routing.service';
import { tap } from 'rxjs/internal/operators/tap';
// Cant use index.ts because it would create a circular dependency
import * as LoginStoreActions from './login.actions';

@Injectable()
export class LoginStoreEffects {
  @Effect()
  loginRequestEffect$: Observable<Action> = this.actions$
    .pipe(
      ofType<LoginStoreActions.LoginRequestAction>(LoginStoreActions.ActionTypes.LOGIN_REQUEST),
      switchMap(action =>
        this.authService.login(action.payload.userName, action.payload.password)
          .pipe(
            map(user => new LoginStoreActions.LoginSuccessAction({ user })),
            catchError(error => of(new LoginStoreActions.LoginFailureAction({ error }))
            )
          )
      )
    );

  @Effect({ dispatch: false })
  loginSuccessEffect$: Observable<Action> = this.actions$
    .pipe(
      ofType<LoginStoreActions.LoginSuccessAction>(LoginStoreActions.ActionTypes.LOGIN_SUCCESS),
      tap(_ => this.routingService.navigateToHome()),
    );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private routingService: RoutingService,
  ) {
  }
}
