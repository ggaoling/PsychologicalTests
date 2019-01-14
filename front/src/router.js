import React from 'react';
import { Router, Route, Switch ,Redirect} from 'dva/router';
import IndexPage from './routes/IndexPage';
import Layout from './routes/Layout';
import Admin from './routes/Admin'
import Login from './routes/Login';
import ErrorPage from './routes/ErrorPage'


function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        
        <Route path="/" exact component={IndexPage} auth={true}/>
        <Route path="/Login" exact component={Login}/>
        
        <Route path="/index" exact component={Layout}/>
        <Route path="/admin" exact component={Admin}/>
        <Route path="/404" exact component={ErrorPage}/>
        {/* <Redirect to="/404"/> */}
      </Switch>
    </Router>
  );
}

export default RouterConfig;
