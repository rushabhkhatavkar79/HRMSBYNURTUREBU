import _ from "lodash";
import {
    GET_DIRECTORY
} from '../actions/actions'

const initialState = {
    all: undefined
};

const DirectoryInfoReducer = (state = initialState, action) => {
    let newState;
    if (action.type === GET_DIRECTORY) {
        newState = _.cloneDeep(state);
        newState.all = action.directory;
        return newState;
    } else {
        return state;
    }
};

export default DirectoryInfoReducer;