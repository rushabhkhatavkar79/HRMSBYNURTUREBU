import { connect } from "react-redux";
import MyLeave from "../components/MyLeave";
import leaveActions from "../actions/Leaveinfo";

const mapStateToProps = (state /*, ownProps*/) => {
    // console.log(state);
    return {
        Leaves: state.Leaves.all,
        Employees: state.Employees.all
    };
};

const mapDispatchToProps = {
    getMyLeaveById: leaveActions.getLeaveInfoById,
    createMyLeave: leaveActions.createLeaveInfo,
    deleteMyLeave: leaveActions.deleteLeaveInfo,
    updateMyLeave: leaveActions.updateLeaveInfo,
};

export default connect(mapStateToProps, mapDispatchToProps)(MyLeave);
