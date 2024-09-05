// import '../styles/global.css'
import { AppProps } from 'next/app';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import ApolloSetting from '../src/components/commons/apollo';
import { Global } from '@emotion/react';
import { globalStyles } from '../src/components/commons/styles/globalStyles';

export default function App({ Component, pageProps }: AppProps) {

  const client = new ApolloClient({
    uri: "https://backendonline.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache() 
  });
  

  return (
    <ApolloSetting>
      <div>
        <Global styles={globalStyles}/>
        <Component {...pageProps} />
      </div>
    </ApolloSetting>
  )
  
}

