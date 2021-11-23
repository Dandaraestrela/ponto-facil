import * as AuthTypes from '../types/authTypes';

const initialState = {
  user: {
    nome: localStorage.getItem('nome') || null,
  },
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AuthTypes.LOGIN_USER_REQUEST_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    case AuthTypes.LOGOUT_USER_SUCCESS:
      return {
        ...state,
        user: {},
      };
    default:
      return state;
  }
};

export default authReducer;
