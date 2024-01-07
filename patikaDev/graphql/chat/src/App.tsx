import { ApolloProvider } from "@apollo/client";
import { useState } from "react";
import createApolloClient from "./Components/ApolloClient";
import { UserProvider } from "./Components/Context/userProvider";
import LoginPage from "./Components/loginPage";
import MessageArea from "./Components/messageArea";
import MessageInput from "./Components/messageInput";

function App() {
  const _authToken = process.env.REACT_APP_HASURA_ADMIN_SECRET as string;
  const _uri = process.env.REACT_APP_HASURA_ANONYMOUS_CHAT_API as string;
  const [client] = useState(createApolloClient(_uri, _authToken));
  return (
    <div className="h-full text-center overflow-hidden px-5 bg-slate-700 text-white">
      <ApolloProvider client={client}>
        <UserProvider>
          <LoginPage />
          <MessageArea />
          <MessageInput />
        </UserProvider>
      </ApolloProvider>
    </div>
  );
}

export default App;
