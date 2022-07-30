import { useRouter } from 'next/router';
import NProgress from 'nprogress';
import React, {
  Fragment,
  ReactElement,
  ReactNode,
  useEffect,
  useState,
} from 'react';

import { ACCSESS_TOKEN } from '@/contants/Storage';
import storage from '@/utils/storage';
type Props = {
  children: ReactNode | ReactElement;
};

const RoutePrivate = ({ children }: Props) => {
  const router = useRouter();
  const [isRender, setIsRender] = useState<boolean>(false);
  const accessToken = storage().getItem(ACCSESS_TOKEN);

  useEffect(() => {
    authCheck(router.asPath);
    const handleStart = () => {
      NProgress.start();
    };
    const handleStop = () => {
      NProgress.done();
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleStop);
    };
  });

  const authCheck = (path: string) => {
    const publicPaths = ['/login'];
    if (publicPaths.includes(path)) {
      if (accessToken) {
        setIsRender(false);
        router.push('/');
        return;
      }
      setIsRender(true);
      return;
    }

    if (!accessToken) {
      router.push('/login');
      return;
    }
    setIsRender(true);
  };

  return <Fragment>{isRender && children}</Fragment>;
};

export default RoutePrivate;
