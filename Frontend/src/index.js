import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute,browserHistory} from 'react-router';
import store from './store';
import './stylesheets/index.css';
import App from './App';
import Login from './containers/Login';
import Register from './containers/Register';
import AddTally from './containers/AddTally';

const routes=(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Login}/>
                <Route path="register" components={Register}/>
                <Route path="addTally" components={AddTally}/>
            </Route>
        </Router>
    </Provider>
);

ReactDOM.render(routes, document.getElementById('root'));