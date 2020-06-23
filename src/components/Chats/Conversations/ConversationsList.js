import React, { useState, useEffect } from "react";
import ConversationSummary from "./ConversationSummary";

const ConversationsList = ({ conversations, setCurrentConversation }) => {
  return (
    <div className="flex mt-2 flex-col overflow-scroll p-1">
      <h4 className="font-bold mb-4">Conversations</h4>
      {
        // TODO SPINNER WHEN THE PAGE IS LOADING
        conversations
          .filter((conversation) => conversation.last_message)
          .map((conversation, index) => (
            <ConversationSummary
              setCurrentConversation={setCurrentConversation}
              conversation={conversation}
              key={index}
            />
          ))
      }
    </div>
  );
};

export default ConversationsList;
