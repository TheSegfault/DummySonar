import { Action } from '@ngrx/store';
import { User } from '../../services/auth.service';

export enum ActionTypes {
  LOGIN_REQUEST = '[Home] Login Request',
  LOGIN_FAILURE = '[Home] Login Failure',
  LOGIN_SUCCESS = '[Home] Login Success'
}

export class LoginRequestAction implements Action {
  readonly type = ActionTypes.LOGIN_REQUEST;

  constructor(public payload: { userName: string; password: string }) {
  }
}

export class LoginFailureAction implements Action {
  readonly type = ActionTypes.LOGIN_FAILURE;

  constructor(public payload: { error: string }) {
  }
}

export class LoginSuccessAction implements Action {
  readonly type = ActionTypes.LOGIN_SUCCESS;

  constructor(public payload: { user: User }) {
  }
}

export type HomeActions =
  | LoginRequestAction
  | LoginFailureAction
  | LoginSuccessAction;
