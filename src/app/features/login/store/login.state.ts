import { User } from '@models/User';

export interface LoginState {
  user: User | null;
  isLoading: boolean;
  error: string;
  isLogged: boolean;
}

export const initialState: LoginState = {
  user: null,
  isLoading: false,
  error: null,
  isLogged: false,
};
