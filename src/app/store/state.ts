import { HomeStoreState } from '@features/home/store';

export interface RootState {
  homeFeature: HomeStoreState.HomeState;
}
