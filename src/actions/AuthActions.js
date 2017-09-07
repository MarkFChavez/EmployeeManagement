import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS } from './types';
import firebase from 'firebase';

const emailChange = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  }
}

const passwordChange = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  }
}

const onLoginSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  })
}

const loginUser = ({ email, password }) => {
  return (dispatch) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => onLoginSuccess(dispatch, user))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(user => onLoginSuccess(dispatch, user))
          .catch(err => console.log(err))
      })
  }
}

export { emailChange, passwordChange, loginUser }
