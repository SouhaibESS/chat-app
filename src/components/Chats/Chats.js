import React, { useState } from "react";
import Dashboard from "../Chats/Dashboard/Dashboard";
import Conversations from "./Contacts/Conversations";
import Conversation from "../Chats/Conversation/Conversation";
import { motion } from "framer-motion";
const Chats = () => {
  const [conversation, setConversation] = useState(null);

  const setCurrentConversation = (conv) => {
    setConversation(conv);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.1 }}
      className="shadow-lg border p-1 rounded-lg h-full w-full bg-white flex"
    >
      <Dashboard />
      <Conversations setCurrentConversation={setCurrentConversation} />
      <Conversation conversation={conversation} />
    </motion.div>
  );
};

export default Chats;
