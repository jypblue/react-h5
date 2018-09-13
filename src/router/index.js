import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import asyncComponent from './AsyncComponent';

// 动态加载
const Home = asyncComponent(() => import(/* webpackChunkName: "home" */'@/view/home'));
const Login = asyncComponent(() => import(/* webpackChunkName: "login" */'@/view/login'));

const RouterView = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
    </Switch>
  </Router>
);



export default RouterView;