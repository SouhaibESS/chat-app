import React, { useState } from "react";
import { FiEdit2, FiUser } from "react-icons/fi";
import Modal from "../Modal";
import { getToken } from "../../helpers";
import { API_URL } from "../../config";

const EditContact = ({ name, contactId, updateContact }) => {
  const [showForm, setFormVisibility] = useState(false);
  const [newName, setName] = useState("");
  const [errors, setErrors] = useState({});

  const changeShowHandler = () => {
    setFormVisibility(!showForm);
  };

  const handleChange = (e) => {
    const {
      target: { value },
    } = e;
    setName(value);
    if (value.length < 3) {
      setErrors({
        name: "name must be 3 characters long",
      });
    } else {
      setErrors({});
    }
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    let data = {
      name: newName,
    };
    data = JSON.stringify(data);

    const response = await fetch(`${API_URL}/contacts/${contactId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "applciation/json",
        Authorization: `Bearer ${getToken()}`,
      },
      body: data,
    });
    const result = await response.json();

    if (!result.success) {
      setErrors(result.message);
    } else {
      setName("");
      updateContact(result.contact)
      changeShowHandler();
    }
  };

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
                value={newName ? newName : name}
                onChange={handleChange}
              />
            </div>

            <div className="flex items-end w-100 space-x-2 float-right outline-none">
              <button
                onClick={handlesubmit}
                className="bg-green-500 p-2 rounded text-sm text-white"
              >
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
