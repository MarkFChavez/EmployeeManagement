import { EMPLOYEE_UPDATE, EMPLOYEE_CREATE_SUCCESS, EMPLOYEES_FETCH_SUCCESS } from './types';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

const employeeUpdate = (prop, value) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { [prop]: value }
  }
}

const employeeCreate = ({ name, phone, shift }) => {
  return (dispatch) => {
    const { currentUser } = firebase.auth();
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .push({ name, phone, shift })
      .then(() => {
        // remove form state
        dispatch({
          type: EMPLOYEE_CREATE_SUCCESS
        })

        Actions.employeeList() // redirect to employee list
      })

  }
}

const employeesFetch = () => {
  return (dispatch) => {
    const { currentUser } = firebase.auth();

    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .on('value', data => {
        dispatch({
          type: EMPLOYEES_FETCH_SUCCESS,
          payload: data.val()
        })
      })
  }
}

export { employeeUpdate, employeeCreate, employeesFetch }
