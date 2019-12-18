import { connect } from "react-redux";
import Directory from "../components/Directory";
import directoryActions from "../actions/Directory";

const mapStateToProps = (state /*, ownProps*/) => {
    // console.log(state);
    return {
        Directory: state.Directory.all
    };
};

const mapDispatchToProps = {
    getDirectory: directoryActions.getDirectory,
};

console.log(mapDispatchToProps)

export default connect(mapStateToProps, mapDispatchToProps)(Directory);
