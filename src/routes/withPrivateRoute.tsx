/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { ADMINISTATOR_LOGIN } from '@/contants/endpoint';
import { ACCSESS_TOKEN, USER } from '@/contants/Storage';
import { UsersRole } from '@/contants/types';

export function withPrivateRoute(WrappedComponent: any) {
  return (props: any) => {
    const router = useRouter();
    const [verified, setVerified] = useState(false);
    const { pathname } = router;
    useEffect(() => {
      const accessToken = localStorage.getItem(ACCSESS_TOKEN);
      const user = localStorage.getItem(USER);
      if (user) {
        if (
          accessToken &&
          (JSON.parse(user).role.name === UsersRole.ADMIN ||
            JSON.parse(user).role.name === UsersRole.STAFF)
        ) {
          setVerified(true);
          localStorage.setItem(ACCSESS_TOKEN, accessToken || '');
        } else {
          router.replace(ADMINISTATOR_LOGIN);
        }
      } else {
        router.replace(ADMINISTATOR_LOGIN);
      }
    }, [pathname, router]);

    if (verified) {
      return <WrappedComponent {...props} />;
    }
    return null;
  };
}
