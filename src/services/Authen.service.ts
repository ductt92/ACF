import { AUTH, LOGIN } from '@/contants/endpoint';
import { dataLogin } from '@/contants/types';
import HttpRequest from '@/utils/Http-request';

import { ILogin } from './Authen.type';

const AuthenService = {
  login: async (data: dataLogin) => {
    try {
      const res: ILogin = await HttpRequest.post(`${AUTH}${LOGIN}`, data);
      return res;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  },
};

export default AuthenService;
