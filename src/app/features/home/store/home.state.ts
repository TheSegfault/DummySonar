import { User } from '@models/User';

export interface HomeState {
  user: User | null;
  isLoading: boolean;
  error: string;
}

export const initialState: HomeState = {
  user: null,
  isLoading: false,
  error: null
};
