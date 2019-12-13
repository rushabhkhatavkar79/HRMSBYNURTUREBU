import _ from "lodash";
import {
    GET_ALL_EMPLOYEE,
    GET_EMPLOYEE_BY_ID,
    GET_EMPLOYEE_LOGIN,
    CREATE_EMPLOYEE,
    UPDATE_EMPLOYEE,
    DELETE_EMPLOYEE
} from '../actions/actions';

const initialState = {
    all: undefined
};

const employeeReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case GET_ALL_EMPLOYEE:
            newState = _.cloneDeep(state);
            newState.all = action.employees;
            return newState;
        case GET_EMPLOYEE_BY_ID:
            newState = _.cloneDeep(state);
            newState.all = action.employee;
            return newState;
        case GET_EMPLOYEE_LOGIN:
            newState = _.cloneDeep(state);
            newState.all = action.id;
            return newState;
        case CREATE_EMPLOYEE:
            newState = _.cloneDeep(state);
            newState.all.push(action.employee);
            return newState;
        case DELETE_EMPLOYEE:
            newState = _.cloneDeep(state);
            _.remove(newState.all, { _id: action.employee._id });
            return newState;
        case UPDATE_EMPLOYEE:
            newState = _.cloneDeep(state);
            let toBeUpdated = _.find(newState.all, { _id: action.employee._id });
            if (toBeUpdated) {
                toBeUpdated.employeeid = action.employee.employeeid;
                toBeUpdated.password = action.employee.password;
            }
            return newState;

        default:
            return state;
    }
};

export default employeeReducer;
