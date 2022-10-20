/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { ADMINISTATOR_LOGIN } from '@/contants/endpoint';
import { ACCSESS_TOKEN } from '@/contants/Storage';

export function withPrivateRoute(WrappedComponent: any) {
  return (props: any) => {
    const router = useRouter();
    const [verified, setVerified] = useState(false);
    const { pathname } = router;
    useEffect(() => {
      const accessToken = localStorage.getItem(ACCSESS_TOKEN);
      if (!accessToken) {
        router.replace(ADMINISTATOR_LOGIN);
      } else {
        setVerified(true);
        localStorage.setItem(ACCSESS_TOKEN, accessToken || '');
      }
    }, [pathname, router]);

    if (verified) {
      return <WrappedComponent {...props} />;
    }
    return null;
  };
}
