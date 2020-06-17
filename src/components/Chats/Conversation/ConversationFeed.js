import React from "react";
import ReceivedMessage from "../Messages/ReceivedMessage";
import SentMessage from "../Messages/SentMessage";
import Messages from "../../../assets/data/Messages";
import { getUser } from '../../../helpers'

const ConversationsFeed = ({ messages }) => {
  const user = getUser();

  return (
    <div className="w-full h-88 flex-col space-y-4 max-h-full max-w-full overflow-scroll px-4 py-8">
      {messages && messages.map((message, index) =>
        message.user_id != user.id ? (
          <ReceivedMessage message={message} key={index} />
        ) : (
          <SentMessage message={message} key={index} />
        )
      )}
    </div>
  );
};

export default ConversationsFeed;
