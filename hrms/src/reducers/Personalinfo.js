import _ from "lodash";
import {
    GET_ALL_PERSONALINFO,
    CREATE_PERSONALINFO,
    UPDATE_PERSONALINFO,
    DELETE_PERSONALINFO,
} from '../actions/actions'


const initialState = {
    all: undefined
};

const personalInfoReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case GET_ALL_PERSONALINFO:
            newState = _.cloneDeep(state);
            newState.all = action.json;
            return newState;
        case CREATE_PERSONALINFO:
            newState = _.cloneDeep(state);
            newState.all.push(action.newEmployee);
            return newState;
        case DELETE_PERSONALINFO:
            newState = _.cloneDeep(state);
            _.remove(newState.all, { _id: action.removedEmployee._id });
            return newState;
        case UPDATE_PERSONALINFO:
            newState = _.cloneDeep(state);
            let toBeUpdated = _.find(newState.all, { _id: action.personalInfoId });
            if (toBeUpdated) {
                toBeUpdated.personalInfoId = action.personalInfoId;
            }
            return newState;

        default:
            return state;
    }
};

export default personalInfoReducer;
