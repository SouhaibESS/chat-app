import React from "react";
import { FiLink2, FiSmile, FiCamera } from "react-icons/fi";
import ReceivedMessage from "../Messages/ReceivedMessage";
import SentMessage from "../Messages/SentMessage";
import Messages from "../../../assets/data/Messages";

const ConversationsFeed = () => {
  return (
    <div className="w-full h-88 flex-col space-y-4 max-h-full max-w-full overflow-scroll    px-4 py-8   ">
      {Messages.map((message, index) =>
        message.received ? (
          <ReceivedMessage message={message} key={index} />
        ) : (
          <SentMessage message={message} key={index} />
        )
      )}
    </div>
  );
};

export default ConversationsFeed;
