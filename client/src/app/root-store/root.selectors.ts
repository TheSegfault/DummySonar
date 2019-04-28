import { createSelector, MemoizedSelector } from '@ngrx/store';
import { HomeStoreSelectors } from './home-store';
import { User } from '../services/auth.service';

export const selectError: MemoizedSelector<object, string> = createSelector(
  HomeStoreSelectors.selectHomeError,
  (homeError: string) => {
    return homeError;
  }
);

export const selectIsLoading: MemoizedSelector<object, boolean> = createSelector(
  HomeStoreSelectors.selectHomeIsLoading,
  (myFeature: boolean) => {
    return myFeature;
  }
);

export const selectUser: MemoizedSelector<object, User> = createSelector(
  HomeStoreSelectors.selectHomeUser,
  (user: User) => {
    return user;
  }
);
