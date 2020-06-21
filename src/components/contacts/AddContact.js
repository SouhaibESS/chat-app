import React, { useState } from "react";

import { FiUserPlus, FiMail, FiUser } from "react-icons/fi";
import Modal from "../Modal";

const AddContact = () => {
  const changeShowHandler = () => {
    setFormVisibility(!showForm);
  };
  const [showForm, setFormVisibility] = useState(false);
  return (
    <>
      <FiUserPlus
        color="green"
        size={"26px"}
        className="cursor-pointer"
        onClick={() => {
          changeShowHandler();
        }}
      />
      <Modal show={showForm} changeShow={changeShowHandler}>
        <div className="h-56">
          {" "}
          <h3 className="text-center text-purple-500 font-medium mb-4">
            Add Contact
          </h3>
          <form class="w-full max-w-sm mx-auto">
            <div class="md:flex md:items-center mb-6 ">
              <label
                class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                for="inline-username"
              >
                <FiUser size={28} color="black" />
              </label>

              <input
                class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-username"
                type="password"
                placeholder="jhon.doe@ul.cm"
              />
            </div>
            <div class="md:flex md:items-center mb-6 ">
              <label
                class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                for="inline-username"
              >
                <FiMail size={28} color="black" />
              </label>

              <input
                class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-username"
                type="password"
                placeholder="jhon.doe@ul.cm"
              />
            </div>
            <div className="flex items-end w-100 space-x-2 float-right outline-none">
              <button className="bg-purple-500 p-2 rounded text-sm text-white">
                Add
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

export default AddContact;
