import {
    GET_SKILLINFO_BY_ID,
    CREATE_SKILLINFO,
    UPDATE_SKILLINFO,
    DELETE_SKILLINFO,
} from './actions'

// const getAllSkillInfos = id => {
//     return dispatch => {
//         fetch(`/skillinformation/${id}`)
//             .then(response => response.json())
//             .then(allSkillInfos => dispatch({ type: GET_ALL_SKILLINFO, allSkillInfos }));
//     };
// };

const getSkillInfoById = id => {
    return dispatch => {
        fetch(`/skillinformation/${id}`)
            .then(response => response.json())
            .then(skillInfo => dispatch({ type: GET_SKILLINFO_BY_ID, skillInfo }));
    };
};

const createSkillInfo = employeeId=> {
    return dispatch => {
        fetch(`/skillinformation/${employeeId}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ employeeId,name,level,certification})
        })
            .then(response => response.json())
            .then(newSkillInfo => {
                console.log(newSkillInfo);
                dispatch({ type: CREATE_SKILLINFO, newSkillInfo });
            });
    };
};

const deleteSkillInfo = id => {
    return dispatch => {
        fetch(`/skillinformation/${id}`, {
            method: "DELETE"
        })
            .then(response => response.json())
            .then(removedSkillInfo => {
                console.log(removedSkillInfo);
                dispatch({ type: DELETE_SKILLINFO, removedSkillInfo });
            });
    };
};

const updateSkillInfo = id => {
    return dispatch => {
        fetch(`/skillinformation/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ employeeId,name,level,certification})
        })
            .then(response => response.json())
            .then(updatedInfo => {
                console.log(updatedInfo);
                dispatch({ type: UPDATE_SKILLINFO, updatedInfo });
            });
    };
};

export default {
    getSkillInfoById,
    createSkillInfo,
    deleteSkillInfo,
    updateSkillInfo
};
