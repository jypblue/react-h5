import React from 'react';
import { Switch, Route } from 'react-router-dom';
import asyncComponent from './AsyncComponent';

// 动态加载
const Home = asyncComponent(() => import('@/view/home'));
const Login = asyncComponent(() => import('@/view/login'));

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
    </Switch>
  </main>
);


export default Main;