import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
} from './types';
import { Actions } from 'react-native-router-flux';

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

  Actions.employeeList()
}

const onLoginFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL })
}

const loginUser = ({ email, password }) => {
  return (dispatch) => {
    // start auth process
    dispatch({ type: LOGIN_USER });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => onLoginSuccess(dispatch, user))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(user => onLoginSuccess(dispatch, user))
          .catch(() => onLoginFail(dispatch))
      })
  }
}

export { emailChange, passwordChange, loginUser }
