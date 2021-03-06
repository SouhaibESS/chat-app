import React, { useEffect, useState } from "react";
import ContactsSearch from "./ContactsSearch";
import ContactSummary from "./ContactSummary";
import AddContact from "./AddContact";
import { getToken } from "../../helpers";
import { API_URL } from "../../config";

const ContactsList = ({ setContact }) => {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const setData = async () => {
      const data = await fetchContacts();
      setContacts(data.contacts);
    };
    setData();
  }, []);

  useEffect(() => {}, [contacts, searchTerm]);

  const fetchContacts = async () => {
    const token = getToken();
    const response = await fetch(`${API_URL}/contacts`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });

    const result = await response.json();

    return result;
  };

  // update and sort contacts list when a new contact gets added
  const addContact = (contact) => {
    setContacts(
      [...contacts, contact].sort((a, b) =>
        a.name > b.name ? 1 : b.name > a.name ? -1 : 0
      )
    );
  };

  const updateSearchTerm = (term = "") => {
    setSearchTerm(term);
  };

  const renderContacts = () => {
    return contacts
      .filter((contact) => contact.name.includes(searchTerm))
      .map((contact, key) => (
        <ContactSummary key={key} contact={contact} setContact={setContact} />
      ));
  };

  return (
    <div className="flex mt-2 flex-col overflow-scroll p-2 border-r-2">
      <ContactsSearch updateSearchTerm={updateSearchTerm} />
      <div className="flex justify-between items-end  p-4">
        <h4 className="font-bold ">Contacts</h4>
        <AddContact addContact={addContact} />
      </div>
      {renderContacts()}
    </div>
  );
};

export default ContactsList;
