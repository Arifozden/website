import { gql, useSubscription } from "@apollo/client";
import { useContext, useEffect, useRef, useState } from "react";
import userContext from "../Context/userContext";
import { IMessage } from "../Interfaces/IMessage";
import OtherMessage from "./other/otherMessage";
import SelfMessage from "./self/selfMessage";

const subscribe = gql`
  subscription MySubscription {
    Message {
      Id
      UserName
      Text
      CreateDate
    }
  }
`;

const MessageArea = () => {
  const [messageList, setMessageList] = useState(Array<IMessage>);
  const { userName } = useContext(userContext);
  const subs = useSubscription<{ Message: Array<IMessage> }>(subscribe);
  const messageAraeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (subs.data !== undefined && subs.error === undefined)
      setMessageList([
        ...subs.data.Message.map((message) => {
          return { ...message, CreateDate: new Date(message.CreateDate) };
        }),
      ]);
  }, [subs]);
  useEffect(() => {
    messageAraeRef.current?.scrollTo({
      top: messageAraeRef.current.scrollHeight,
    });
  });

  return (
    <div
      ref={messageAraeRef}
      className="h-[90%] overflow-y-scroll scroll-smooth overflow-x-hidden"
    >
      {messageList.map((message) => {
        if (message.UserName === userName) {
          return <SelfMessage key={message.Id} message={message} />;
        } else {
          return <OtherMessage key={message.Id} message={message} />;
        }
      })}
    </div>
  );
};

export default MessageArea;
