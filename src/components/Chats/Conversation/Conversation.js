import React, { useState, useEffect } from "react";
import ConversationHeader from "./ConversationHeader";
import ConversationsActions from "./ConversationActions";
import ConversationsFeed from "./ConversationFeed";
import { getToken } from "../../../helpers";
import { API_URL } from "../../../config";

const Conversation = ({ conversation }) => {
  const [messages, setMessages] = useState([]);
  const user = conversation && conversation.other_user;

  useEffect(() => {
    const setData = async () => {
      const data = conversation && (await fetchMessages());
      setMessages(data && data.conversation.messages);
    };
    setData();
  }, [conversation]);

  const fetchMessages = async () => {
    const token = getToken();
    const response = await fetch(
      `${API_URL}/conversations/${conversation.id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    );
    const result = await response.json();

    return result;
  };

  return (
    <div className=" w-9/12 rounded-r-lg flex flex-col px-1 justify-between h-full ">
      {conversation ? (
        <>
          <ConversationHeader user={user} />
          <div className="bg-gray-200 h-88 relative">
            <ConversationsFeed messages={messages} />
            <ConversationsActions />
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Conversation;
