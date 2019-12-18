import _ from "lodash";
import {
    GET_LEAVEINFO_BY_ID,
    CREATE_LEAVEINFO,
    UPDATE_LEAVEINFO,
    DELETE_LEAVEINFO,
} from '../actions/actions'


const initialState = {
    all: undefined
};

const leaveInfoReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case GET_LEAVEINFO_BY_ID:
            newState = _.cloneDeep(state);
            newState.all = action.leaveInfo;
            return newState;
        case CREATE_LEAVEINFO:
            newState = _.cloneDeep(state);
            newState.all.push(action.newleaveInfo);
            return newState;
        case DELETE_LEAVEINFO:
            newState = _.cloneDeep(state);
            _.remove(newState.all, { _id: action.removedLeaveInfo._id });
            return newState;
        case UPDATE_LEAVEINFO:
            newState = _.cloneDeep(state);
            let toBeUpdated = _.find(newState.all, { _id: action.leaveinfoId });
            if (toBeUpdated) {
                toBeUpdated.leaveType = action.leaveType;
                toBeUpdated.fromDate = action.fromDate;
                toBeUpdated.toDate = action.toDate;
                toBeUpdated.comments = action.comments;
            }
            return newState;

        default:
            return state;
    }
};

export default leaveInfoReducer;
