import { NextPage } from 'next';
import { AppProps } from 'next/app';
import Head from 'next/head';
import I18nProvider from 'next-translate/I18nProvider';
import useTranslation from 'next-translate/useTranslation';
import { ReactElement, ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import '@fontsource/roboto';

import '@/styles/globals.css';
import 'antd/dist/antd.css';

import Footer from '@/container/Footer';
import HeaderHome from '@/container/HeaderHome';

// import '~slick-carousel/slick/slick.css';
// import '~slick-carousel/slick/slick-theme.css';
import { store } from '@/store/store';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);
  const { lang } = useTranslation('common');

  return (
    <>
      <Head>
        <title>ACF.vn</title>
        <meta name='description' />
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
      </Head>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <I18nProvider lang={lang}>
            <HeaderHome />
            {getLayout(<Component {...pageProps} />)}
            <Footer />
          </I18nProvider>
        </Provider>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
