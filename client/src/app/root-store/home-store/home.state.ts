import { User } from '../../services/auth.service';

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
