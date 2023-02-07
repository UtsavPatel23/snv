import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "http://vpl.weareopen.com.au/graphql",
    cache: new InMemoryCache(),
});

export default client;