import React, { useEffect , useRef } from "react";
import ReceivedMessage from "../Messages/ReceivedMessage";
import SentMessage from "../Messages/SentMessage";
import Messages from "../../../assets/data/Messages";
import { getUser } from "../../../helpers";

const ConversationsFeed = ({ messages }) => {
  const user = getUser();
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages])

  return (
    <div className="w-full h-88 flex-col space-y-4 max-h-full max-w-full overflow-scroll px-4 py-8">
      {messages &&
        messages.map((message, index) =>
          message.user_id != user.id ? (
            <ReceivedMessage message={message} key={index} />
          ) : (
            <SentMessage message={message} key={index} />
          )
        )}
        <div ref={messagesEndRef} />
    </div>
  );
};

export default ConversationsFeed;
