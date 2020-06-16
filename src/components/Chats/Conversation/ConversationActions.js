import React from "react";
import { FiLink2, FiSmile, FiCamera } from "react-icons/fi";

const ConversationsActions = () => {
  return (
    <div className="w-full flex h-12  rounded-br-lg  px-4 justify-between items-center ">
      <div className=" w-full flex items-center w-full mx-auto border border-purple-500 px-4 py-2 bg-white ">
        <FiLink2 size={"20px"} className="text-purple-500 mr-4 w-1/12" />
        <input
          className="appearance-none w-7/12 mx-auto bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          placeholder="Jane Doe"
          aria-label="Full name"
        />
        <FiCamera size={"20px"} className="text-purple-500  w-1/12" />
        <FiSmile size={"20px"} className="text-purple-500 w-1/12" />
      </div>
    </div>
  );
};

export default ConversationsActions;
