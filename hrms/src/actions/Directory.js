import {
    GET_DIRECTORY,
} from './actions'

const getDirectory = () => {
    return dispatch => {
        fetch(`/viewdirectory`)
            .then(response => response.json())
            .then(directory => dispatch({ type: GET_DIRECTORY, directory }));
    };
};

export default getDirectory;