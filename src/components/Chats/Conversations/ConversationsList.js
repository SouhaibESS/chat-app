import React, { useState, useEffect } from "react";
import ConversationSummary from "./ConversationSummary";
import { API_URL } from "../../../config";
import { getToken, getUser } from "../../../helpers";
import { echo } from "../../../global";

const ConversationsList = ({ setCurrentConversation }) => {
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

  return (
    <div className="flex mt-2 flex-col overflow-scroll p-1">
      <h4 className="font-bold mb-4">Conversations</h4>
      {
        // TODO SPINNER WHEN THE PAGE IS LOADING
        conversations
          .filter((conversation) => conversation.last_message)
          .map((conversation, index) => (
            <ConversationSummary
              setCurrentConversation={setCurrentConversation}
              conversation={conversation}
              key={index}
            />
          ))
      }
    </div>
  );
};

export default ConversationsList;
