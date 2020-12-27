import axios from 'axios';

import { getJwtToken } from './authToken';

const defaults = {
  baseURL: 'https://guessmypass.herokuapp.com/',
  headers: () => ({
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: getJwtToken() ? `Bearer ${getJwtToken()}` : undefined,
  }),
};

const api = (method, url, body) => {
  return new Promise((resolve, reject) => {
    axios({
      url: `${defaults.baseURL}${url}`,
      method,
      headers: defaults.headers(),
      data: method === 'get' ? undefined : body,
    }).then(
      response => {
        resolve(response.data);
      },
      error => {
        if (error.response) {
          if (error.response.status === 401) {
            console.log('No auth');
          } else {
            reject(error.response.data);
          }
        } else {
          reject(error);
        }
      },
    );
  });
};

const methods = {
  get: (...args) => api('get', ...args),
  post: (...args) => api('post', ...args),
  put: (...args) => api('put', ...args),
  patch: (...args) => api('patch', ...args),
  delete: (...args) => api('delete', ...args),
};

window.axios = axios;

export default methods;
