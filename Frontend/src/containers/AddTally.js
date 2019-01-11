import AddTally from '../components/AddTally';
import {connect} from 'react-redux';

function mapStateToProps(state) {
    return {
        loginInfo:state.Login.loginInfo
    };
}

function mapDispatchToProps() {
    return {
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTally);