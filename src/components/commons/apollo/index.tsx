import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

interface ApolloSettingProps {
    children: JSX.Element
}

export default function ApolloSetting(props: ApolloSettingProps){
    const client = new ApolloClient({
        uri: "https://backendonline.codebootcamp.co.kr/graphql",
        cache: new InMemoryCache() 
      });

    return (
        <ApolloProvider client={client}>
            {props.children}
        </ApolloProvider>

    )
}