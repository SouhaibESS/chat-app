import React, { useState, useEffect } from "react";
import Dashboard from "../Chats/Dashboard/Dashboard";
import Conversations from "./Conversations/Conversations";
import Conversation from "../Chats/Conversation/Conversation";
import { motion } from "framer-motion";
import { API_URL } from "../../config";
import { getToken, getUser } from "../../helpers";
import { echo } from "../../global";

const Chats = () => {
  const [conversation, setConversation] = useState(null);
  const [conversations, setConversations] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const setData = async () => {
      setLoading(true);
      const data = await fetchConversations();
      setConversations(data.conversations);
    };
    setData();
    setLoading(false);
    updateConversations();
  }, []);

  const fetchConversations = async () => {
    const token = getToken();
    const response = await fetch(`${API_URL}/conversations`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });

    const result = await response.json();

    return result;
  };

  // when a conversation recieve a new message we want that conversation to be at the top
  const updateConversations = () => {
    const user = getUser();
    echo
      .private(`user.${user && user.id}`)
      .listen("newMessageEvent", (data) => {
        const conversationUpdate = [data.conversation_update];

        setConversations((oldConversations) => {
          const filteredConversations = oldConversations.filter(
            (conv) => conv.id != conversationUpdate[0].id
          );

          const newConversations = conversationUpdate.concat(
            filteredConversations
          );

          return newConversations;
        });
      });
  };

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
      <Conversations
        conversations={conversations}
        setCurrentConversation={setCurrentConversation}
      />
      <Conversation conversation={conversation} />
    </motion.div>
  );
};

export default Chats;
