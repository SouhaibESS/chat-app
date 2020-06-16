import React from "react";

const SentMessage = ({ message }) => {
  return (
    <div className="w-full">
      <div className="flex space-x-3  items-end h-auto   mt-3 justify-end ">
        <span className="align-bottom my-0 block font-thin text-xs">2:90</span>
        <div className="   max-w-lg bg-white p-2 rounded-lg   ">
          {message.body}
        </div>
      </div>
    </div>
  );
};

export default SentMessage;
