import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { AuthService } from '@services/auth.service';

import * as homeActions from './home.actions';

@Injectable()
export class HomeStoreEffects {
  @Effect()
  loginRequestEffect$: Observable<Action> = this.actions$
    .pipe(
      ofType<homeActions.LoginRequestAction>(homeActions.ActionTypes.LOGIN_REQUEST),
      switchMap(action =>
        AuthService.login(action.payload.userName, action.payload.password)
          .pipe(
            map(user => new homeActions.LoginSuccessAction({ user })),
            catchError(error => of(new homeActions.LoginFailureAction({ error }))
            )
          )
      )
    );

  constructor(private actions$: Actions) {
  }
}
