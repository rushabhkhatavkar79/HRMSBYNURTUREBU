import { connect } from "react-redux";
import PersonalInfo from "../components/PersonalInfo";
import PersonalInfoActions from '../actions/Personalinfo';

const mapStateToProps = (state /*, ownProps*/) => {
    // console.log(state);
    return {
        PersonalInfo: state.PersonalInfo.all,
        Employees: state.Employees.all
    };
};

const mapDispatchToProps = {
    getAllPersonalInfos: PersonalInfoActions.getAllPersonalInfos,
    updatePersonalInfo: PersonalInfoActions.updatePersonalInfo
};

export default connect(mapStateToProps, mapDispatchToProps)(PersonalInfo);
