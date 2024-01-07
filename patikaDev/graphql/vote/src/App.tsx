import { ApolloProvider } from "@apollo/client";
import { useState } from "react";
import createApolloClient from "./Apollo/client";
import Container from "./Components/Container";
import Modal from "./Components/Modal";

function App() {
  const [client] = useState(createApolloClient());
  return (
    <ApolloProvider client={client}>
      <div className="h-full overflow-x-hidden overflow-y-auto text-center relative">
        <Modal />
        <Container />
      </div>
    </ApolloProvider>
  );
}

export default App;
