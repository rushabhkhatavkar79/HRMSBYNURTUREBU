import {
    GET_ALL_EMPLOYEE,
    GET_EMPLOYEE_BY_ID,
    GET_EMPLOYEE_LOGIN,
    CREATE_EMPLOYEE,
    UPDATE_EMPLOYEE,
    DELETE_EMPLOYEE
} from './actions';

const getAllEmployees = () => {
    return dispatch => {
        fetch("/employee")
            .then(response => response.json())
            .then(employees => dispatch({ type: GET_ALL_EMPLOYEE, employees }));
    };
};

const getMyEmployeeById = id => {
    return dispatch => {
        fetch(`/employee/${id}`)
            .then(response => response.json())
            .then(employee => dispatch({ type: GET_EMPLOYEE_BY_ID, employee }));
    };
};

const getMyEmployeeByLogin = (employeeid, password) => {
    return dispatch => {
        fetch(`/employee/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ employeeid, password })
        })
            .then(response => response.json())
            .then(id => dispatch({ type: GET_EMPLOYEE_LOGIN, id }));
    };
};

const createMyEmployee = (employeeid, password, personalinfo = null, contactinfo = null) => {
    return dispatch => {
        fetch(`/employee`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ employeeid, password, personalinfo, contactinfo })
        })
            .then(response => response.json())
            .then(employee => {
                dispatch({ type: CREATE_EMPLOYEE, employee });
            });
    };
};

const deleteMyEmployee = id => {
    return dispatch => {
        fetch(`/employee/${id}`, {
            method: "DELETE"
        })
            .then(response => response.json())
            .then(employee => {
                dispatch({ type: DELETE_EMPLOYEE, employee });
            });
    };
};

const updateMyEmployee = (empdbId, employeeid, password) => {
    return dispatch => {
        fetch(`/employee`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ empdbId, employeeid, password })
        })
            .then(response => response.json())
            .then(employee => {
                dispatch({ type: UPDATE_EMPLOYEE, employee });
            });
    };
};

export default {
    getAllEmployees,
    getMyEmployeeById,
    getMyEmployeeByLogin,
    createMyEmployee,
    deleteMyEmployee,
    updateMyEmployee
};
