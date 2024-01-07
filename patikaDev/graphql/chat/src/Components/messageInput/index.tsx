import { gql, useApolloClient } from "@apollo/client";
import { FormEvent, useContext, useState } from "react";
import userContext from "../Context/userContext";

const MessageInput = () => {
  const [messageText, setMessageText] = useState("");
  const client = useApolloClient();
  const { userName } = useContext(userContext);

  const mutation = () => gql`
  mutation MyMutation {
    insert_Message_one(object: { Text: "${messageText}", UserName: ${userName} }) {
      __typename
    }
  }
`;

  const messageSend = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (userName && messageText.length > 1) {
      client
        .mutate({
          mutation: mutation(),
        })
        .then(() => setMessageText(""));
    }
  };

  return (
    <div className="text-black">
      <form action="" onSubmit={messageSend}>
        <input
          type="text"
          className="w-full outline-none px-2 py-1 my-3"
          value={messageText}
          onChange={(e) => setMessageText(e.target.value)}
        />
        <input type="submit" value="" />
      </form>
    </div>
  );
};

export default MessageInput;
