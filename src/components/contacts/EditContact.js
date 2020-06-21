import React, { useState } from "react";

import { FiEdit2, FiMail, FiUser } from "react-icons/fi";
import Modal from "../Modal";

const EditContact = ({ name }) => {
  const changeShowHandler = () => {
    setFormVisibility(!showForm);
  };
  const [showForm, setFormVisibility] = useState(false);
  return (
    <>
      <FiEdit2
        color="green"
        size={"26px"}
        className="cursor-pointer"
        onClick={() => {
          changeShowHandler();
        }}
      />
      <Modal show={showForm} changeShow={changeShowHandler}>
        <div className=" h-40">
          {" "}
          <h3 className="text-center text-purple-500 text-sm font-bold mb-4">
            Edit Contact
          </h3>
          <form class="w-full max-w-sm mx-auto">
            <div class="md:flex md:items-center mb-6 ">
              <label
                class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                for="inline-username"
              >
                <FiUser size={"25px"} color="black" />
              </label>

              <input
                class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full text-lg py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-username"
                value={name}
              />
            </div>

            <div className="flex items-end w-100 space-x-2 float-right outline-none">
              <button className="bg-green-500 p-2 rounded text-sm text-white">
                Edit
              </button>
              <button
                className="bg-red-500 p-2 rounded text-sm text-white"
                onClick={() => changeShowHandler()}
              >
                Exit
              </button>
            </div>
          </form>
        </div>{" "}
      </Modal>
    </>
  );
};

export default EditContact;
