import * as AuthTypes from '../types/authTypes';

const initialState = {
  user: {
    id: localStorage.getItem('user_id') || null,
    nome: localStorage.getItem('nome') || null,
    email: localStorage.getItem('email') || null,
    flagAdmin: localStorage.getItem('flag_admin') || null,
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
