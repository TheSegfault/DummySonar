import { LoginStoreState } from '@features/login/store';

export interface RootState {
  loginFeature: LoginStoreState.LoginState;
}
