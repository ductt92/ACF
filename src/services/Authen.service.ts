import { AUTH, LOGIN } from '@/contants/endpoint';
import { ACCSESS_TOKEN, REFRESH_TOKEN, USER } from '@/contants/Storage';
import { dataLogin } from '@/contants/types';
import HttpRequest from '@/utils/Http-request';
import storage from '@/utils/storage';

import { ILogin } from './Authen.type';
const { setItem } = storage();

const AuthenService = {
  login: async (data: dataLogin) => {
    try {
      const res: ILogin = await HttpRequest.post(`${AUTH}${LOGIN}`, data);
      if (res) {
        setItem(ACCSESS_TOKEN, res.tokens.access.token);
        setItem(REFRESH_TOKEN, res.tokens.refresh.token);
        setItem(USER, JSON.stringify(res.user));
      }
      return res;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  },
};

export default AuthenService;
