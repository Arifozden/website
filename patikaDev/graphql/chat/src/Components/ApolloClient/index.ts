import { ApolloClient, HttpLink, InMemoryCache, split } from "@apollo/client/core";
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from "@apollo/client/utilities";



const httpLink = (uri: string, authToken: string) => new HttpLink({
    uri: `https://${uri}`,
    headers: {
        'content-type': 'application/json',
        'x-hasura-admin-secret': authToken
    },
})

const wsLink = (uri: string, authToken: string) => new WebSocketLink({
    uri: `wss://${uri}`,
    options: {
        reconnect: true,
        connectionParams: {
            headers: {
                'content-type': 'application/json',
                'x-hasura-admin-secret': authToken
            },
        }
    }
})

const splitLink = (uri: string, authToken: string) => split(
    ({ query }) => {
        const definition = getMainDefinition(query)
        return (
            definition.kind === 'OperationDefinition' && definition.operation === 'subscription'
        );
    },
    wsLink(uri, authToken),
    httpLink(uri, authToken)
)


const createApolloClient = (uri: string, authToken: string) => {
    return new ApolloClient({
        link: splitLink(uri, authToken),
        cache: new InMemoryCache(),
    });
};

export default createApolloClient