import { EMAIL_CHANGED } from '../actions/types';

const initialState = {
  email: '',
  password: ''
}

const AuthReducer = (state = initialState, action) => {
  switch(action.type) {
    case EMAIL_CHANGED:
      console.log(action);
      return { ...state, email: action.payload };

    default:
      return state;
  }
}

export default AuthReducer;
