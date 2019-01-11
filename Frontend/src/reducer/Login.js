const initState = {
    loginInfo: {}
};

const reducer = (state = initState, action = {}) => {
    switch (action.type) {
        case "SAVE_LOGIN_INFO":
            return {...state, loginInfo: action.loginInfo};
        default:
            return state;
    }
};

export default {initState, reducer};