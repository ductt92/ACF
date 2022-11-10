import axios from 'axios';
import querystring from 'query-string';

import { BASE_URL } from '@/contants/common.constants';
import { AUTH_REFRESH_TOKEN } from '@/contants/endpoint';
import { ACCSESS_TOKEN, REFRESH_TOKEN, USER } from '@/contants/Storage';
import { ILogin } from '@/services/Authen.type';
import storage from '@/utils/storage';

const { getItem, location, setItem, removeAll } = storage();

const axiosClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  paramsSerializer: (param) => querystring.stringify(param),
});
axiosClient.interceptors.request.use(
  function (config) {
    const accessToken = getItem(ACCSESS_TOKEN);
    config.headers = { Authorization: `Bearer ${accessToken}` };
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  function (response) {
    return response.data;
  },
  async function (error) {
    const originalConfig = error.config;
    if (originalConfig.url !== '/login' && error.response) {
      if (error.response.status === 401) {
        if (originalConfig.retry) {
          removeAll();
          return location('/login');
        }
        const refreshToken = getItem(REFRESH_TOKEN);
        if (!refreshToken) {
          removeAll();
          return location('/login');
        }
        try {
          originalConfig.retry = true;
          const res: ILogin = await axiosClient.post(AUTH_REFRESH_TOKEN, {
            refreshToken: getItem(REFRESH_TOKEN),
          });
          setItem(ACCSESS_TOKEN, res.tokens.access.token);
          setItem(REFRESH_TOKEN, res.tokens.refresh.token);
          setItem(USER, JSON.stringify(res.user));
          return axiosClient(originalConfig);
        } catch (_error) {
          return Promise.reject(_error);
        }
      }
    }
    if (originalConfig.url !== '/administrator/login' && error.response) {
      if (error.response.status === 401) {
        if (originalConfig.retry) {
          removeAll();
          return location('/administrator/login');
        }
        const refreshToken = getItem(REFRESH_TOKEN);
        if (!refreshToken) {
          removeAll();
          return location('/administrator/login');
        }
        try {
          originalConfig.retry = true;
          const res: ILogin = await axiosClient.post(AUTH_REFRESH_TOKEN, {
            refreshToken: getItem(REFRESH_TOKEN),
          });
          setItem(ACCSESS_TOKEN, res.tokens.access.token);
          setItem(REFRESH_TOKEN, res.tokens.refresh.token);
          setItem(USER, JSON.stringify(res.user));
          return axiosClient(originalConfig);
        } catch (_error) {
          return Promise.reject(_error);
        }
      }
    }

    if (error.message === 'Network Error' && error.response) {
      alert('Please check your internet connection and try again');
    }
    return Promise.reject(error);
  }
);

export default axiosClient;
