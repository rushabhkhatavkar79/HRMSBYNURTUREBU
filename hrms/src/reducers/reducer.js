import { combineReducers } from "redux";
import Employees from './Employee';
import Leaves from './Leaveinfo';
import Skills from './Skillinfo';

import Directory from './Directory';


import PersonalInfo from './Personalinfo'

const reducer = combineReducers({ Employees, Leaves, Skills, PersonalInfo, Directory});


export default reducer;