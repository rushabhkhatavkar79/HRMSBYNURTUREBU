import { combineReducers } from "redux";
import Employees from './Employee';
import Leaveinfo from './Leaveinfo';
import Skillinfo from './Skillinfo';

const reducer = combineReducers({ Employees,Leaveinfo,Skillinfo});

export default reducer;