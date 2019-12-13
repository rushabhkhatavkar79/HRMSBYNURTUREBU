import {
    GET_ALL_CONTACTINFO,
    GET_CONTACTINFO_BY_ID,
    CREATE_CONTACTINFO,
    UPDATE_CONTACTINFO,
    DELETE_CONTACTINFO
} from './actions'
const getAllContactInfos = () => {
    return dispatch => {
        fetch("/contactinformation")
            .then(response => response.json())
            .then(allContactInfos => dispatch({ type: GET_ALL_CONTACTINFO, allContactInfos }));
    };
};

/* const getContactInfoById = id => {
    return dispatch => {
        fetch(`/contactinformation/${id}`)
            .then(response => response.json())
            .then(contactInfo => dispatch({ type: GET_CONTACTINFO_BY_ID, contactInfo }));
    };
}; */

const createContactInfo = employeeId => {
    return dispatch => {
        fetch(`/contactinformation`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ employeeId })
        })
            .then(response => response.json())
            .then(newContactInfo => {
                console.log(newContactInfo);
                dispatch({ type: CREATE_CONTACTINFO, newContactInfo });
            });
    };
};

const deleteContactInfo = ContactInfoId => {
    return dispatch => {
        fetch(`/contactinformation/${ContactInfoId}`, {
            method: "DELETE"
        })
            .then(response => response.json())
            .then(removedContactInfo => {
                console.log(removedContactInfo);
                dispatch({ type: DELETE_CONTACTINFO, removedContactInfo });
            });
    };
};

const updateContactInfo = (employeeId, ContactInfoId) => {
    return dispatch => {
        fetch(`/contactinformation`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ employeeId, ContactInfoId })
        })
            .then(response => response.json())
            .then(updatedInfo => {
                console.log(updatedInfo);
                dispatch({ type: UPDATE_CONTACTINFO, updatedInfo });
            });
    };
};

export default {
    getAllContactInfos,
    // getContactInfoById,
    createContactInfo,
    deleteContactInfo,
    updateContactInfo
};
