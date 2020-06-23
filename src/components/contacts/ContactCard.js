import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FiPhoneCall,
  FiMail,
  FiPhone,
  FiVideo,
  FiStar,
  FiTrash2,
} from "react-icons/fi";
import EditContact from "./EditContact";
import { getToken } from "../../helpers";
import { API_URL } from "../../config";

const ContactCard = ({ contact, deleteContact }) => {
  const [kontact, setContact] = useState(null);

  useEffect(() => {
    setContact(contact);
  }, []);

  useEffect(() => {}, [kontact]);

  const updateContact = (newContact) => {
    setContact(newContact);
  };

  const handleDelete = async (e) => {
    e.preventDefault()
    const response = await fetch(`${API_URL}/contacts/${contact.contact_id}`,{
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getToken()}`
      }
    })
    const result = await response.json()

    if(result.success) {
      deleteContact()
    }
  }

  return contact ? (
    <div className="w-9/12 ml-4 overflow-scroll p-1   ">
      <div className="w-9/12 bg-white mx-auto h-full ">
        <div className="bg-purple-500 w-10/12 mx-auto p-4 relative   ">
          <div className="flex justify-between absolute right-0 w-2/12 mr-2">
            <FiStar color="white" size={"20px"} />
            <FiPhoneCall color="white" size={"20px"} />
            <FiVideo color="white" size={"20px"} />
          </div>
          <img
            className=" bg-white h-16 w-16 mx-auto rounded-full border-2 transform translate-y-10   text-center "
            src={contact.avatar}
          />
        </div>
        <div className=" w-10/12 mx-auto px-4 py-8 text-center border">
          <h1>{kontact ? kontact.name : contact.name}</h1>
          <h6 className=" text-gray-500 font-hairline">alias</h6>
          <ul className="mt-5 flex flex-col space-y-8">
            {/* TODO: add phone number to contact
            
            {contact.phone ? (
              <li>
                <div className="flex items-center ml-3   w-1/2 space-x-5">
                  <FiPhone size={"20px"} className=" text-gray-500" />

                  <p>{contact.phone}</p>
                </div>
              </li>
            ) : (
              <li>
                <div className="flex items-center ml-3   w-1/2 space-x-5">
                  <FiPhone size={"20px"} className=" text-gray-500" />

                  <p>0677717615</p>
                </div>
              </li>
            )} */}
            <li>
              <div className="flex items-center ml-3   w-1/2 space-x-5">
                <FiMail size={"20px"} className=" text-gray-500" />

                <p>{contact.email}</p>
              </div>
            </li>
            <li className="w-1/2 mx-auto">
              <div className=" w-full flex items-center ml-3 mt-1 mx-auto h-10   w-2/3 space-x-5 justify-center ">
                <motion.span
                  initial={{ fontSize: "28px" }}
                  whileHover={{ fontSize: "30px" }}
                  transitio={{ duration: 0.5, type: "spring" }}
                >
                  <EditContact
                    updateContact={updateContact}
                    name={kontact ? kontact.name : contact.name}
                    contactId={contact.contact_id}
                  />
                </motion.span>
                <motion.span
                  initial={{ fontSize: "28px" }}
                  whileHover={{ fontSize: "30px" }}
                  transitio={{ duration: 0.5, type: "spring" }}
                >
                  <FiTrash2 onClick={handleDelete} className="text-red-500 cursor-pointer" />
                </motion.span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  ) : null;
};

export default ContactCard;
