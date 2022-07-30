/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextComponentType } from 'next';
import { AppProps } from 'next/app';
import Head from 'next/head';
import I18nProvider from 'next-translate/I18nProvider';
import useTranslation from 'next-translate/useTranslation';
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
interface CustomAppProps extends AppProps {
  Component: NextComponentType & {
    Layout?: any;
  };
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});
const Noop = ({ children }: { children: JSX.Element }) => (
  <>
    {' '}
    <HeaderHome />
    {children}
    <Footer />
  </>
);

function MyApp({ Component, pageProps }: CustomAppProps) {
  const Layout = Component.Layout || Noop;

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
          <Layout>
            <I18nProvider lang={lang}>
              <Component {...pageProps} />
            </I18nProvider>
          </Layout>
        </Provider>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
