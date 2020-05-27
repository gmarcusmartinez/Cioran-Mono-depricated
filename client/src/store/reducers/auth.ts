import { Action, ActionTypes } from '../actions/types';

export const initialAuthState = {
  loading: true,
  currentUser: null,
  isAuthenticated: false,
};

export const auth = (state = initialAuthState, action: Action) => {
  const { type, payload } = action;
  switch (type) {
    case ActionTypes.GET_CURRENT_USER:
      return {
        ...state,
        loading: false,
        currentUser: payload,
      };
    case ActionTypes.SIGNOUT:
      return {
        ...state,
        loading: false,
        currentUser: payload,
        isAuthenticated: false,
      };
    case ActionTypes.SIGNUP:
    case ActionTypes.SIGNIN:
      return {
        ...state,
        loading: false,
        currentUser: payload,
        isAuthenticated: true,
      };
    default:
      return state;
  }
};
