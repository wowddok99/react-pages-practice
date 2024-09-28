import { ApolloClient, ApolloLink, ApolloProvider, InMemoryCache } from "@apollo/client";
import { createUploadLink } from 'apollo-upload-client'

interface ApolloSettingProps {
    children: JSX.Element
}

export default function ApolloSetting(props: ApolloSettingProps){
    const uploadLink = createUploadLink({
        uri: "https://backendonline.codebootcamp.co.kr/graphql"
    })
    
    const client = new ApolloClient({
        link: ApolloLink.from([uploadLink]),
        cache: new InMemoryCache() 
      });

    return (
        <ApolloProvider client={client}>
            {props.children}
        </ApolloProvider>
    )
}