import '@/styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import type { NextPage } from 'next';
import { Session } from 'next-auth';
import { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { ApolloProvider } from '@apollo/client';
import apolloClient from '@/services/apollo-client';
import { wrapper } from '@/store';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps<{
  session: Session;
}> & {
  Component: NextPageWithLayout;
};

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  const { store, props } = wrapper.useWrappedStore(pageProps);

  return (
    <SessionProvider session={session}>
      <ApolloProvider client={apolloClient}>
        <Provider store={store}>{getLayout(<Component {...props} />)}</Provider>
      </ApolloProvider>
    </SessionProvider>
  );
}
