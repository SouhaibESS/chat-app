import React from "react";
import { FiPhoneCall, FiVideo, FiMenu } from "react-icons/fi";

const ConversationHeader = () => {
  return (
    <div className="w-full flex h-20  bg-purple-500 rounded-tr-lg px-4 justify-between items-center ">
      <div className="flex space-x-4 h-full  items-center">
        <img
          className=" bg-white h-16  w-16   rounded-full border-2 "
          src="https://graph.facebook.com/5/picture"
        />
        <h4 className="py-3 text-white font-bold">Jason sokmani</h4>
      </div>
      <div className="flex justify-between w-20">
        <FiPhoneCall color="white" size={"20px"} />
        <FiVideo color="white" size={"20px"} />
        <FiMenu color="white" size={"20px"} />
      </div>
    </div>
  );
};

export default ConversationHeader;
