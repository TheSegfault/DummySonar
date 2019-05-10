import { ActionTypes, LoginActions } from './login.actions';
import { initialState, LoginState } from './login.state';

export function loginReducer(state = initialState, action: LoginActions): LoginState {
  switch (action.type) {
    case ActionTypes.LOGIN_REQUEST:
      return {
        ...state,
        error: null,
        isLoading: true
      };
    case ActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        error: null,
        isLoading: false,
        isLogged: true,
      };
    case ActionTypes.LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        isLoading: false,
        isLogged: false,
      };
    default: {
      return state;
    }
  }
}
