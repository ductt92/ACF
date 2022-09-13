/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { LOGIN_HOME } from '@/contants/endpoint';
import { ACCSESS_TOKEN } from '@/contants/Storage';

export function withPrivateRouteUser(WrappedComponent: any) {
  return (props: any) => {
    const router = useRouter();
    const [verified, setVerified] = useState(false);

    useEffect(() => {
      const accessToken = localStorage.getItem(ACCSESS_TOKEN);
      if (!accessToken) {
        router.replace(LOGIN_HOME);
      } else {
        setVerified(true);
        localStorage.setItem('accessToken', ACCSESS_TOKEN);
      }
    }, [router]);

    if (verified) {
      return <WrappedComponent {...props} />;
    }
    return null;
  };
}
