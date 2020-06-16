import React from "react";
import ContactSummary from "./ContactSummary";
import contacts from "../../../assets/data/contacts";

const ContactsList = () => {
  return (
    <div className="flex  mt-2 flex-col overflow-scroll p-1">
      <h4 className="font-bold mb-4">Contacts</h4>
      {contacts.map((contact, index) => (
        <ContactSummary contact={contact} key={index} />
      ))}
    </div>
  );
};

export default ContactsList;
