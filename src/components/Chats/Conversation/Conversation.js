import React, { useState, useEffect } from "react";
import Pusher from "pusher-js";
import Echo from "laravel-echo";
import ConversationHeader from "./ConversationHeader";
import ConversationsActions from "./ConversationActions";
import ConversationsFeed from "./ConversationFeed";
import { getToken, getUser } from "../../../helpers";
import { API_URL } from "../../../config";
import { echo } from "../../../global";

const Conversation = ({ conversation }) => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const user = conversation && conversation.other_user;

  useEffect(() => {
    const setData = async () => {
      setLoading(true);
      const data = conversation && (await fetchMessages());
      setMessages(data && data.conversation.messages);
      setLoading(false);
    };
    setData();
    receiveMessages();
  }, [conversation]);

  const fetchMessages = async () => {
    const endpoint = `${API_URL}/conversations/${conversation.id}`;
    const result = await fetchRequest(endpoint);
    return result;
  };

  const sendMessage = async (message) => {
    const endpoint = `${API_URL}/conversations/${conversation.id}`;
    const method = "POST";
    const body = {
      message: message,
    };
    const result = await fetchRequest(endpoint, method, body);
    const lastMessage = result.message;
    setMessages([...messages, lastMessage]);
  };

  const receiveMessages = () => {
    const user = getUser();
    echo
      .private(`user.${user && user.id}`)
      .listen("newMessageEvent", (data) => {
        const lastMessage = data.conversation_update.last_message;
        const conversationId = data.conversation_update.id;
        if (conversationId === (conversation && conversation.id))
          setMessages((prevMessages) => {
            return prevMessages && prevMessages.concat(lastMessage);
          });
      });
  };

  const fetchRequest = async (endpoint, method = "GET", body = null) => {
    const token = getToken();
    const response = await fetch(endpoint, {
      method: method,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: body && JSON.stringify(body),
    });
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
            <ConversationsActions sendMessage={sendMessage} />
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Conversation;
