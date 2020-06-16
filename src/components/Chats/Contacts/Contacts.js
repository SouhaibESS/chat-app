import React from "react";
import ContactSearch from "./ContactSearch";
import ContactsList from "./ContactsList";
const Contacts = () => {
  return (
    <div className="w-3/12 border flex flex-col px-2 py-2   ">
      <ContactSearch />
      <ContactsList />
    </div>
  );
};

export default Contacts;
