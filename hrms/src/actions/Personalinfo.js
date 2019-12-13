import {
    GET_ALL_PERSONALINFO,
    GET_PERSONALINFO_BY_ID,
    CREATE_PERSONALINFO,
    UPDATE_PERSONALINFO,
    DELETE_PERSONALINFO,
} from './actions'
const getAllPersonalInfos = id => {
    return dispatch => {
        fetch(`/personalinformation/${id}`)
            .then(response => response.json())
            .then(allPersonalInfos => dispatch({ type: GET_ALL_PERSONALINFO, allPersonalInfos }));
    };
};
/*
const getPersonalInfoById = id => {
    return dispatch => {
        fetch(`/personalinformation/${id}`)
            .then(response => response.json())
            .then(personalInfo => dispatch({ type: GET_PERSONALINFO_BY_ID, personalInfo }));
    };
};
*/
const createPersonalInfo = employeeId => {
    return dispatch => {
        fetch(`/personalinformation/${id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ employeeId })
        })
            .then(response => response.json())
            .then(newPersonalInfo => {
                console.log(newPersonalInfo);
                dispatch({ type: CREATE_PERSONALINFO, newPersonalInfo });
            });
    };
};

const deletePersonalInfo = id => {
    return dispatch => {
        fetch(`/personalinformation/${id}`, {
            method: "DELETE"
        })
            .then(response => response.json())
            .then(removedPersonalInfo => {
                console.log(removedPersonalInfo);
                dispatch({ type: DELETE_PERSONALINFO, removedPersonalInfo });
            });
    };
};

const updatePersonalInfo = id => {
    return dispatch => {
        fetch(`/personalinformation/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ employeeId, PersonalInfoId })
        })
            .then(response => response.json())
            .then(updatedInfo => {
                console.log(updatedInfo);
                dispatch({ type: UPDATE_PERSONALINFO, updatedInfo });
            });
    };
};

export default {
    getAllPersonalInfos,
    //getPersonalInfoById,
    createPersonalInfo,
    deletePersonalInfo,
    updatePersonalInfo
};
