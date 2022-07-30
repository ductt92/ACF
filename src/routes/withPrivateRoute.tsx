/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { ACCSESS_TOKEN } from '@/contants/Storage';

export function withPrivateRoute(WrappedComponent: any) {
  return (props: any) => {
    const Router = useRouter();
    const [verified, setVerified] = useState(false);

    useEffect(() => {
      const accessToken = localStorage.getItem(ACCSESS_TOKEN);
      if (!accessToken) {
        Router.replace('/login');
      } else {
        setVerified(true);
        localStorage.setItem('accessToken', ACCSESS_TOKEN);
      }
    }, [Router]);

    if (verified) {
      return <WrappedComponent {...props} />;
    }
    return null;
  };
}
