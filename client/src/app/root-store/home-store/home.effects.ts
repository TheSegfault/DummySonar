import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import * as featureActions from './home.actions';

@Injectable()
export class HomeStoreEffects {
  @Effect()
  loginRequestEffect$: Observable<Action> = this.actions$.pipe(
    ofType<featureActions.LoginRequestAction>(featureActions.ActionTypes.LOGIN_REQUEST),
    switchMap(action => of(new featureActions.LoginSuccessAction({ user: { user: 'coucou' } })))
  );

  constructor(private actions$: Actions) {
  }
}
