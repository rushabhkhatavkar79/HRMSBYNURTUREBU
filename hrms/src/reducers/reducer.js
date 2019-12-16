import { combineReducers } from "redux";
import Employees from './Employee';
import Leaves from './Leaveinfo';
import Skills from './Skillinfo';

const reducer = combineReducers({ Employees,Leaves,Skills});

export default reducer;