import React, { useState } from "react";
import { FiLink2, FiSmile, FiCamera } from "react-icons/fi";
import messages from "../../../assets/data/Messages";

const ConversationsActions = ({ sendMessage }) => {
  const [message, setMessage] = useState("");

  const handelChange = (event) => {
    event.preventDefault();
    setMessage(event.target.value);
  };

  const handelSubmit = (event) => {
    event.preventDefault();

    sendMessage(message);
    setMessage("");
  };

  return (
    <div className="w-full flex h-12  rounded-br-lg  px-4 justify-between items-center ">
      <form onSubmit={(e) => handelSubmit(e)}>
        <div className=" w-full flex items-center w-full mx-auto border border-purple-500 px-4 py-2 bg-white ">
          <FiLink2 size={"20px"} className="text-purple-500 mr-4 w-1/12" />
          <input
            className="appearance-none w-7/12 mx-auto bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Type a message ..."
            value={message}
            onChange={handelChange}
          />
          <button type="submit" style={{ display: "none" }}></button>
          <FiCamera size={"20px"} className="text-purple-500  w-1/12" />
          <FiSmile size={"20px"} className="text-purple-500 w-1/12" />
        </div>
      </form>
    </div>
  );
};

export default ConversationsActions;
