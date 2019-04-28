import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import { HomeState } from './home.state';
import { User } from '../../services/auth.service';

const getError = (state: HomeState): any => state.error;

const getIsLoading = (state: HomeState): boolean => state.isLoading;

const getUser = (state: HomeState): any => state.user;

export const selectHomeState: MemoizedSelector<object, HomeState> = createFeatureSelector<HomeState>('home');

export const selectHomeError: MemoizedSelector<object, any> = createSelector(
  selectHomeState,
  getError
);

export const selectHomeIsLoading: MemoizedSelector<object, boolean> = createSelector(
  selectHomeState,
  getIsLoading
);

export const selectHomeUser: MemoizedSelector<object, User> = createSelector(
  selectHomeState,
  getUser
);
