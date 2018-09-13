import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

const VConsole = require('vconsole');

import configureStore from '@/store';
import RouterView from '@/router';
import registerServiceWorker from './registerServiceWorker';
import './style/base.scss';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <RouterView />
  </Provider>
  ,
  document.getElementById('root'));
registerServiceWorker();

new VConsole(); // eslint-disable-line

