import React from "react";

const ContactSummary = ({ contact, setContact }) => {
  return (
    <div
      className=" flex  space-x-4 mb-6 p-1  cursor-pointer hover:bg-gray-100 "
      onClick={() => setContact(contact)}
    >
      <div className="relative ">
        <img
          className=" bg-white h-12 w-12 mx-auto rounded-full  text-center "
          src={`https://randomuser.me/api/portraits/men/${contact.id}.jpg`}
        />
        <div className=" w-3 h-3 transform -translate-y-3  rounded-full absolute mb-24 right-0  bg-green-400"></div>
      </div>
      <div>
        <h5 className="font-bold">{contact.name}</h5>
        <p className=" font-hairline">{contact.email}</p>
      </div>
    </div>
  );
};

export default ContactSummary;
