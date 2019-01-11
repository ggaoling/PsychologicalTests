import {createStore, combineReducers} from 'redux';
import AddTally from '../reducer/AddTally';
import Login from '../reducer/Login';

const initState = {
    AddTally:AddTally.initState,
    Login:Login.initState
};
const reducers = {
    AddTally:AddTally.reducer,
    Login:Login.reducer
};



const store = createStore(combineReducers(reducers), initState);

export default store;