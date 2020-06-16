import React from "react";
import ConversationHeader from "./ConversationHeader";
import ConversationsActions from "./ConversationActions";
import ConversationsFeed from "./ConversationFeed";
const Conversation = () => {
  return (
    <div className=" w-9/12 rounded-r-lg flex flex-col px-1 justify-between h-full ">
      <ConversationHeader />
      <div className="bg-gray-200 h-88 relative">
        <ConversationsFeed />
        <ConversationsActions />
      </div>
    </div>
  );
};

export default Conversation;
