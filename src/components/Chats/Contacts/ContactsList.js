import React, { useState, useEffect } from "react";
import ContactSummary from "./ContactSummary";
import contacts from "../../../assets/data/contacts";
import { API_URL } from "../../../config";
import { getToken } from "../../../helpers";

const ContactsList = ({setCurrentConversation}) => {
  
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

  return (
    <div className="flex mt-2 flex-col overflow-scroll p-1">
      <h4 className="font-bold mb-4">Conversations</h4>
      
      { // TODO SPINNER WHEN THE PAGE IS LOADING
        conversations
          .filter((conversation) => conversation.last_message)
          .map((conversation, index) => <ContactSummary setCurrentConversation={setCurrentConversation} conversation={conversation} key={index} />)
      }
    </div>
  );
};

export default ContactsList;
