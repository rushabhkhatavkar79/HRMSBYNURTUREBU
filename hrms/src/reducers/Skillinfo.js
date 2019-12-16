import _ from "lodash";
import {
    GET_SKILLINFO_BY_ID,
    CREATE_SKILLINFO,
    UPDATE_SKILLINFO,
    DELETE_SKILLINFO,
} from '../actions/actions'


const initialState = {
    all: undefined
};

const skillInfoReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case GET_SKILLINFO_BY_ID:
            newState = _.cloneDeep(state);
            newState.all = action.skillinfo;
            return newState;
        case CREATE_SKILLINFO:
            newState = _.cloneDeep(state);
            newState.all.push(action.newskillInfo);
            return newState;
        case DELETE_SKILLINFO:
            newState = _.cloneDeep(state);
            _.remove(newState.all, { _id: action.removedSkillInfo._id });
            return newState;
        case UPDATE_SKILLINFO:
            newState = _.cloneDeep(state);
            let toBeUpdated = _.find(newState.all, { _id: action.updatedInfo._id });
            if (toBeUpdated) {
                toBeUpdated.skillInfoId = action.updatedInfo._id;
            }
            return newState;

        default:
            return state;
    }
};

export default skillInfoReducer;
