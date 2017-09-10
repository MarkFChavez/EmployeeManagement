import { EMPLOYEES_FETCH_SUCCESS } from '../actions';

const EmployeesReducer = (state = {}, action) => {
  switch (action.type) {
    case EMPLOYEES_FETCH_SUCCESS:
      return { ...state, employees: action.payload };

    default:
      return state;
  }
}

export default EmployeesReducer;
