import { combineReducers } from "redux";
import Employees from './Employee';
import Leaves from './Leaveinfo';
import Skills from './Skillinfo';
import PersonalInfo from './Personalinfo'

const reducer = combineReducers({ Employees, Leaves, Skills, PersonalInfo });

export default reducer;