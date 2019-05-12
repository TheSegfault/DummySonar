//  With the rootStore selectors you can combine child selectors into one, pretty convenient for isLoading for example

// import { createSelector, MemoizedSelector } from '@ngrx/store';
// import { LoginStoreSelectors } from '@features/login/store';

// import { HomeStoreSelectors } from '@features/home/store';
// import { CoucouStoreSelectors } from '@features/home/store';
// import { Coucou2StoreSelectors } from '@features/home/store';

// export const selectError: MemoizedSelector<object, string> = createSelector(
//   HomeStoreSelectors.selectHomeIsLoading,
//   CoucouStoreSelectors.selectCoucouIsLoading,
//   Coucou2StoreSelectors.selectCoucou2IsLoading,
//   (homeIsLoading: boolean,
//    CoucouIsLoading: boolean,
//    Coucou2IsLoading: boolean) => {
//     return homeIsLoading || CoucouIsLoading || Coucou2IsLoading;
//   }
// );

// export const selectIsLoggedIn: MemoizedSelector<object, boolean> = createSelector(
//   LoginStoreSelectors.selecIsLogged, (isLoggedIn) => {
//     return isLoggedIn;
//   }
// );
