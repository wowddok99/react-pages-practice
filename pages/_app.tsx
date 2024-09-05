// import '../styles/global.css'
import { AppProps } from 'next/app';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Global } from '@emotion/react';
import { globalStyles } from '../src/components/commons/styles/globalStyles';

export default function App({ Component, pageProps }: AppProps) {

  const client = new ApolloClient({
    uri: "https://backendonline.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache() 
  });
  

  return (
    <ApolloProvider client={client}>
      <Global styles={globalStyles}/>
      <Component {...pageProps} />
    </ApolloProvider>
  )
  
}

