import React from "react";
import messages from "../../../assets/data/Messages";

const SentMessage = ({ message }) => {
  const date = new Date(message.created_at)
  return (
    <div className="w-full">
      <div className="flex space-x-3  items-end h-auto   mt-3 justify-end ">
        <span className="align-bottom my-0 block font-thin text-xs">{date.toDateString()}</span>
        <div className="   max-w-lg bg-white p-2 rounded-lg   ">
          {message.message}
        </div>
      </div>
    </div>
  );
};

export default SentMessage;
