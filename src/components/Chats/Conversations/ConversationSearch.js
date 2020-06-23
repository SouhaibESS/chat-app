import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
const ConversationSearch = ({ updateSearchTerm }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    event.preventDefault();
    const {
      target: { value },
    } = event;
    setSearchTerm(value);
    updateSearchTerm(value);
  };

  return (
    <div className="flex items-center border-b-2 border-purple-500 py-2">
      <FiSearch size={28} className="text-purple-500 mr-4" />
      <input
        className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
        type="text"
        placeholder="Jane Doe"
        aria-label="Full name"
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
};

export default ConversationSearch;
