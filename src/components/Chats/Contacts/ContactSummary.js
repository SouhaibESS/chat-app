import React from "react";

const ContactSummary = ({ contact }) => {
  console.log(contact);
  let message =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, voluptate.";

  let seen = true;
  let selected = true;

  return (
    <div className=" flex  space-x-4 mb-6 p-1  cursor-pointer hover:bg-gray-100 ">
      <div className="relative ">
        <img
          className=" bg-white h-12 w-12 mx-auto rounded-full  text-center "
          src={"https://graph.facebook.com/" + contact.user.id + "/picture"}
        />
        <div className=" w-3 h-3 transform -translate-y-3  rounded-full absolute mb-24 right-0  bg-green-400"></div>
      </div>
      <div>
        <h5 className="font-bold">{contact.user.name}</h5>
        <p className=" font-hairline">
          {contact.message.body.length < 25
            ? contact.message.body
            : `${contact.message.body.substring(0, 25)}...`}
        </p>
      </div>
    </div>
  );
};

export default ContactSummary;
