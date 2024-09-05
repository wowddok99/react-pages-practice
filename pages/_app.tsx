// import '../styles/global.css'
import { AppProps } from 'next/app';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import ApolloSetting from '../src/components/commons/apollo';
import { Global } from '@emotion/react';
import { globalStyles } from '../src/components/commons/styles/globalStyles';
import LayOut from '../src/components/commons/layout';

export default function App({ Component, pageProps }: AppProps) {

  return (
    <ApolloSetting>
      <div>
        <Global styles={globalStyles}/>
        <LayOut>
          <Component {...pageProps} />
        </LayOut>
      </div>
    </ApolloSetting>
  )
  
}

