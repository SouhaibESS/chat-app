import React, { useState } from "react";
import Dashboard from "../Chats/Dashboard/Dashboard";
import ContactsList from "./ContactsList";
import { motion } from "framer-motion";
import ContactCard from "./ContactCard";

const Contacts = () => {
  const [contact, SetContact] = useState(null);

  const setContactHandler = (contact = null) => {
    SetContact(contact);
  };

  const deleteContact = () => {
    SetContact(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.1 }}
      className="shadow-lg border p-1 rounded-lg h-full w-full bg-white flex"
    >
      <Dashboard />
      <ContactsList setContact={setContactHandler} />
      <ContactCard deleteContact={deleteContact} contact={contact} />
    </motion.div>
  );
};

export default Contacts;
