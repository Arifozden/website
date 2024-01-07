import { ApolloClient, HttpLink, InMemoryCache, split } from "@apollo/client";
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from "@apollo/client/utilities";


const envUri = process.env.REACT_APP_URL as string
const password = process.env.REACT_APP_PASSWORD as string

const headers = {
    'content-type': 'application/json',
    'x-hasura-admin-secret': password
}


const webSocketLink = new WebSocketLink({
    uri: "wss://" + envUri,
    options: {
        reconnect: true,
        connectionParams: {
            headers
        }
    }
})


const httpLink = new HttpLink({
    uri: "https://" + envUri,
    headers
})


const splitLink = split(({ query }) => {
    const definition = getMainDefinition(query)
    return (
        definition.kind === 'OperationDefinition' && definition.operation === 'subscription'
    );

},
    webSocketLink,
    httpLink
)

const createApolloClient = () => {
    return new ApolloClient({
        link: splitLink,
        cache: new InMemoryCache(),
    });
}



export default createApolloClient