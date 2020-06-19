import React from "react";
import ConversationSearch from "./ConversationSearch";
import ConversationsList from "./ConversationsList";
const Conversations = ({setCurrentConversation}) => {
  
  return (
    <div className="w-3/12 border flex flex-col px-2 py-2   ">
      <ConversationSearch />
      <ConversationsList setCurrentConversation={setCurrentConversation}/>
    </div>
  );
};

export default Conversations;
