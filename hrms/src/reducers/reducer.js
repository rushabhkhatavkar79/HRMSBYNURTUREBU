import { combineReducers } from "redux";
import Employees from './Employee';
import Leaves from './Leaveinfo';
import Skills from './Skillinfo';
import Directory from './Directory';

const reducer = combineReducers({ Employees, Leaves, Skills, Directory });

export default reducer;