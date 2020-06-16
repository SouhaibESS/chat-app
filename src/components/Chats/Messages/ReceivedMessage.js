import React from "react";

const ReceivedMessage = ({ message }) => {
  return (
    <div className="w-full">
      <div className="flex space-x-3  items-end h-auto mt-3   ">
        <div className="   max-w-lg bg-purple-400 p-2 rounded-lg  text-white ">
          {message.body}
        </div>
        <span className="align-bottom my-0 block font-thin text-xs">2:90</span>
      </div>
    </div>
  );
};

export default ReceivedMessage;
