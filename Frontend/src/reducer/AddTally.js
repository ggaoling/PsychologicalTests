const initState = {
    tallyBook: {}
};

const reducer = (state = initState, action = {}) => {
    switch (action.type) {
        case "SAVE_TALLY_BOOK":
            return {...state, tallyBook: action.tallyBook};
        default:
            return state;
    }
};

export default {initState, reducer};
