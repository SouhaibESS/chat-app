import React, { useState, useEffect } from "react";
import ConversationHeader from "./ConversationHeader";
import ConversationsActions from "./ConversationActions";
import ConversationsFeed from "./ConversationFeed";
import { getToken, getUser } from "../../../helpers";
import { API_URL } from "../../../config";
import { userChannel } from "../../../global";

const Conversation = ({ conversation, sendMessageUpdate }) => {
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
    conversation && sendMessagesSeenNotification();
    receiveNotifications(conversation);
    return function cleanup() {
      userChannel
        .stopListening("newMessageEvent")
        .stopListening("messagesSeenEvent");
    };
  }, [conversation]);

  useEffect(() => {}, [messages]);

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
    sendMessageUpdate(lastMessage, conversation.id);
    setMessages([...messages, lastMessage]);
  };

  const receiveNotifications = (conv) => {
    userChannel
      .listen("newMessageEvent", (data) => {
        const lastMessage = data.conversation_update.last_message;
        const conversationId = data.conversation_update.id;
        if (conversationId === (conv && conv.id)) {
          // when the user is already opening the conversation
          // we send notification that messages are seen
          sendMessagesSeenNotification();

          setMessages((prevMessages) => {
            return prevMessages && prevMessages.concat(lastMessage);
          });
        }
      })
      .listen("messagesSeenEvent", (data) => {
        const conversationId = data.conversation_update.id;
        if (conversationId == (conv && conv.id))
          setMessages((messages) => {
            return messages.map((message) => {
              if (message.user_id == user.id) message.seen = 1;
              return message;
            });
          });
      });
  };

  const sendMessagesSeenNotification = async () => {
    const endpoint = `${API_URL}/conversations/${conversation.id}`;
    const method = "PUT";
    const result = await fetchRequest(endpoint, method);
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
