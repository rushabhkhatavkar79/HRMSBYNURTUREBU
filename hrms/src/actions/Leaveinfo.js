import {
    GET_LEAVEINFO_BY_ID,
    CREATE_LEAVEINFO,
    UPDATE_LEAVEINFO,
    DELETE_LEAVEINFO
} from './actions'

// const getAllLeaveInfos = id => {
//     return dispatch => {
//         fetch(`/leaveinformation/${id}`)
//             .then(response => response.json())
//             .then(allLeaveInfos => dispatch({ type: GET_ALL_LEAVEINFO, allLeaveInfos }));
//     };
// };

const getLeaveInfoById = id => {
    return dispatch => {
        fetch(`/leaveinformation/${id}`)
            .then(response => response.json())
            .then(leaveInfo => dispatch({ type: GET_LEAVEINFO_BY_ID, leaveInfo }));
    };
};

const createLeaveInfo = (employeeId,leaveType,fromDate,toDate,comments)=> {
    return dispatch => {
        fetch(`/leaveinformation/${employeeId}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ leaveType,fromDate,toDate,comments})
        })
            .then(response => response.json())
            .then(newLeaveInfo => {
                console.log(newLeaveInfo);
                dispatch({ type: CREATE_LEAVEINFO, newLeaveInfo });
            });
    };
};

const deleteLeaveInfo = id => {
    return dispatch => {
        fetch(`/leaveinformation/${id}`, {
            method: "DELETE"
        })
            .then(response => response.json())
            .then(removedLeaveInfo => {
                console.log(removedLeaveInfo);
                dispatch({ type: DELETE_LEAVEINFO, removedLeaveInfo });
            });
    };
};

const updateLeaveInfo = (leaveId,employeeId, LeaveInfoId,leaveType,fromDate,toDate,comments) => {
    return dispatch => {
        fetch(`/leaveinformation`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({leaveId,employeeId, LeaveInfoId,leaveType,fromDate,toDate,comments})
        })
            .then(response => response.json())
            .then(updatedInfo => {
                console.log(updatedInfo);
                dispatch({ type: UPDATE_LEAVEINFO, updatedInfo });
            });
    };
};

export default {
    getLeaveInfoById,
    createLeaveInfo,
    deleteLeaveInfo,
    updateLeaveInfo
};
