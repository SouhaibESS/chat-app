import React from "react";
import messages from "../../../assets/data/Messages";

const ReceivedMessage = ({ message }) => {
  const date = new Date(message.created_at)
  return (
    <div className="w-full">
      <div className="flex space-x-3  items-end h-auto mt-3   ">
        <div className="   max-w-lg bg-purple-400 p-2 rounded-lg  text-white ">
          {message.message}
        </div>
        <span className="align-bottom my-0 block font-thin text-xs">{date.toDateString()}</span>
      </div>
    </div>
  );
};

export default ReceivedMessage;
