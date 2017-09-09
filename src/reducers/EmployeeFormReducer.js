import { EMPLOYEE_UPDATE, EMPLOYEE_CREATE_SUCCESS } from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: ''
};

const EmployeeFormReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      return { ...state, ...action.payload };

    case EMPLOYEE_CREATE_SUCCESS:
      return INITIAL_STATE;

    default:
      return state;
  }
}

export default EmployeeFormReducer;
