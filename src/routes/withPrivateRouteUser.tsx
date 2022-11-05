/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { LOGIN_HOME } from '@/contants/endpoint';
import { ACCSESS_TOKEN, USER } from '@/contants/Storage';
import { UsersRole } from '@/contants/types';

export function withPrivateRouteUser(WrappedComponent: any) {
  return (props: any) => {
    const router = useRouter();
    const [verified, setVerified] = useState(false);

    useEffect(() => {
      const accessToken = localStorage.getItem(ACCSESS_TOKEN);
      const user = localStorage.getItem(USER);
      if (user) {
        if (accessToken && JSON.parse(user).role.name === UsersRole.USER) {
          setVerified(true);
          localStorage.setItem(ACCSESS_TOKEN, accessToken || '');
        } else {
          router.replace(LOGIN_HOME);
        }
      } else {
        router.replace(LOGIN_HOME);
      }
    }, [router]);

    if (verified) {
      return <WrappedComponent {...props} />;
    }
    return null;
  };
}
