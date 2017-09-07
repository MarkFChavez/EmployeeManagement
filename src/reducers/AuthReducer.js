import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS } from '../actions/types';

const initialState = {
  email: '',
  password: '',
  user: null
}

const AuthReducer = (state = initialState, action) => {
  switch(action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };

    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };

    case LOGIN_USER_SUCCESS:
      return { ...state, ...initialState, user: action.payload }

    default:
      return state;
  }
}

export default AuthReducer;
