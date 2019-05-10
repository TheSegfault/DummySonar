import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import { User } from '@models/User';
import { LoginState } from './login.state';

const getError = (state: LoginState): any => state.error;

const getIsLoading = (state: LoginState): boolean => state.isLoading;

const getUser = (state: LoginState): any => state.user;

export const selectLoginState: MemoizedSelector<object, LoginState> = createFeatureSelector<LoginState>('Login');

export const selectLoginError: MemoizedSelector<object, any> = createSelector(
  selectLoginState,
  getError
);

export const selectLoginIsLoading: MemoizedSelector<object, boolean> = createSelector(
  selectLoginState,
  getIsLoading
);

export const selectUser: MemoizedSelector<object, User> = createSelector(
  selectLoginState,
  getUser
);
