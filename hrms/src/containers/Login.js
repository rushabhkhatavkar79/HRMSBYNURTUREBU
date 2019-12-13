import { connect } from "react-redux";
import Login from "../components/Login";
import employeeActions from "../actions/Employee";

const mapStateToProps = (state /*, ownProps*/) => {
    // console.log(state);
    return {

        Employees: state.Employees.all
    };
};

const mapDispatchToProps = {
    getAllEmployees: employeeActions.getAllEmployees,
    getMyEmployeeById: employeeActions.getMyEmployeeById,
    getMyEmployeeByLogin: employeeActions.getMyEmployeeByLogin,
    createMyEmployee: employeeActions.createMyEmployee,
    deleteMyEmployee: employeeActions.deleteMyEmployee,
    updateMyEmployee: employeeActions.updateMyEmployee,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
