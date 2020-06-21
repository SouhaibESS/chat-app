import React, { useEffect } from "react";
import ContactsSearch from "./ContactsSearch";
import ContactSummary from "./ContactSummary";

import AddContact from "./AddContact";
const ContactsList = ({ setContact }) => {
  const contacts = [
    { id: 21, name: "Hamza El haissouf", email: "hamza@gmail.com" },
    { id: 73, name: "Hassan Sokmani", email: "hassan@gmail.com" },
    { id: 34, name: "Adil Soufiane", email: "Adil@gmail.com" },
    { id: 39, name: "Mustapha kayjo", email: "stayfa@gmail.com" },
    { id: 32, name: "Stayka El lomani", email: "berdo@gmail.com" },
  ];

  useEffect(() => {
    setContact(contacts[0]);
  }, []);

  return (
    <div className="flex mt-2 flex-col overflow-scroll p-2 border-r-2">
      <ContactsSearch />
      <div className="flex justify-between items-end  p-4">
        <h4 className="font-bold ">Contacts</h4>
        <AddContact />
      </div>
      {contacts.map((contact) => (
        <ContactSummary contact={contact} setContact={setContact} />
      ))}
    </div>
  );
};

export default ContactsList;
