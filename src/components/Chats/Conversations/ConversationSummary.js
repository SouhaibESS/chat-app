import React from "react";
import { getUser } from '../../../helpers'

const ConversationSummary = ({ conversation, setCurrentConversation }) => {
  let user = conversation.other_user;
  let { message, seen } = conversation.last_message;
  let authUser = getUser()

  return (
    <a onClick={() => setCurrentConversation(conversation)}>
      <div className=" flex  space-x-4 mb-6 p-1  cursor-pointer hover:bg-gray-100 ">
        <div className="relative ">
          <img
            className=" bg-white h-12 w-12 mx-auto rounded-full  text-center "
            src={user.avatar}
          />
          <div className=" w-3 h-3 transform -translate-y-3  rounded-full absolute mb-24 right-0  bg-green-400"></div>
        </div>
        <div>
          <h5 className="font-bold">{user.name}</h5>
          <p className=" font-hairline">
            {conversation.last_message.user_id == authUser.id ? 'You: ' : ''}
            {message.length < 25 ?  message : `${message.substring(0, 25)}...`}
          </p>
        </div>
      </div>
    </a>
  );
};

export default ConversationSummary;
