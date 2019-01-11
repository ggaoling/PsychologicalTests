import {connect} from 'react-redux';
import Logon from '../components/Login';
import {bindActionCreators} from 'redux';
import {save_login_info} from '../action';

function mapStateToProps() {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        handleSaveLoginInfo:bindActionCreators(save_login_info,dispatch)
    };
}


export default connect(mapStateToProps,mapDispatchToProps)(Logon);