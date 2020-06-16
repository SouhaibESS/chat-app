import React from "react";
import Dashboard from "../Chats/Dashboard/Dashboard";
import Contacts from "../Chats/Contacts/Contacts";
import Conversation from "../Chats/Conversation/Conversation";
import { motion } from "framer-motion";
const Chats = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.1 }}
      className="shadow-lg border p-1 rounded-lg h-full w-full bg-white flex"
    >
      <Dashboard />
      <Contacts />
      <Conversation />
    </motion.div>
  );
};

export default Chats;