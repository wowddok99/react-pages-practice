// import '../styles/global.css'
import { AppProps } from 'next/app';
import { globalStyles } from '../src/components/commons/styles/globalStyles';
import { Global } from '@emotion/react';
import ApolloSetting from '../src/components/commons/apollo';
import LoadingProvider from '../src/components/commons/loading';
import LayOut from '../src/components/commons/layout';

export default function App({ Component, pageProps }: AppProps) {

  return (
    <ApolloSetting>
        <LoadingProvider>
          <div>
            <Global styles={globalStyles}/>
            <LayOut>
              <Component {...pageProps} />
            </LayOut>
          </div>
        </LoadingProvider>
    </ApolloSetting>
  )
  
}

