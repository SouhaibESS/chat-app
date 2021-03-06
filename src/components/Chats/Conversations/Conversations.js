import React, { useState, useEffect } from "react";
import ConversationSearch from "./ConversationSearch";
import ConversationsList from "./ConversationsList";

const Conversations = ({
  conversations,
  setCurrentConversation,
  updateSearchTerm,
}) => {
  return (
    <div className="w-3/12 border flex flex-col px-2 py-2   ">
      <ConversationSearch updateSearchTerm={updateSearchTerm} />
      <ConversationsList
        conversations={conversations}
        setCurrentConversation={setCurrentConversation}
      />
    </div>
  );
};

export default Conversations;
