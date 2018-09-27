import 'whatwg-fetch';
import qs from 'qs';
import config from './config';
const api = config.api;

// const accesstoken = () => (window.localStorage.getItem('cnode_accesstoken') || '');

export default {
  async get(url, data = {}) {
    const search = qs.stringify(data);
    const arr = [`${api}${url}`];
    if (search) {
      arr.push(search);
    }
    return fetch(arr.join('?')).then(response => response.json());
  },
  async post(url, data = {}) {
    const body = qs.stringify(data);
    const arr = [`${api}${url}`];
    return fetch(arr.join('?'), {
      body,
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then(response => response.json());
  }
};

