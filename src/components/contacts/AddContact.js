import React, { useState, useEffect } from "react";
import { FiUserPlus, FiMail, FiUser } from "react-icons/fi";
import Modal from "../Modal";
import { API_URL } from "../../config";
import { getToken } from "../../helpers";

const AddContact = ({ addContact }) => {
  const [showForm, setFormVisibility] = useState(false);
  const [name, setName] = useState("");
  const [nameValid, setNameValid] = useState(false);
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {}, []);

  const changeShowHandler = () => {
    setFormVisibility(!showForm);
  };

  const handleChange = (event) => {
    const {
      target: { name, value },
    } = event;

    switch (name) {
      case "name":
        setName(value);
        if (value.length < 3) {
          setErrors({
            ...errors,
            name: "name must be 3 characters long",
          });
        } else {
          setErrors({
            ...errors,
            name: "",
          });
          setNameValid(true);
        }
        break;
      case "email":
        setEmail(value);
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          setErrors({
            ...errors,
            email: "Please enter a valid email address",
          });
        } else {
          setErrors({
            ...errors,
            email: "",
          });
          setEmailValid(true);
        }
        break;
      default:
        console.error("Error: no " + name + "input");
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    let data = {
      name: name,
      email: email,
    };
    data = JSON.stringify(data);
    const response = await fetch(`${API_URL}/contacts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken()}`,
      },
      body: data,
    });

    const result = await response.json();
    if (!result.success) {
      setErrors(result.message);
      setLoading(false);
    } else {
      setName("");
      setEmail("");
      setErrors({});
      changeShowHandler();
      setLoading(false);
      addContact(result.contact);
    }
  };

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
          <form className="w-full max-w-sm mx-auto">
            <div className="md:flex md:items-center mb-6 ">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="inline-username"
              >
                <FiUser size={28} color="black" />
              </label>

              <input
                className={
                  errors.name
                    ? "bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-red-700 border-red-500"
                    : "bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                }
                id="inline-username"
                type="text"
                placeholder="jhon doe"
                name="name"
                value={name}
                onChange={handleChange}
              />
            </div>
            {errors.name ? (
              <p className="text-red-500 text-xs italic">{errors.name}</p>
            ) : null}
            <div className="md:flex md:items-center mb-6 ">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="inline-username"
              >
                <FiMail size={28} color="black" />
              </label>

              <input
                className={
                  errors.email
                    ? "bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-red-700 border-red-500"
                    : "bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                }
                id="inline-username"
                type="email"
                placeholder="jhon.doe@ul.cm"
                name="email"
                value={email}
                onChange={handleChange}
              />
            </div>
            {errors.email ? (
              <p className="text-red-500 text-xs italic">{errors.email}</p>
            ) : null}
            <div className="flex items-end w-100 space-x-2 float-right outline-none">
              <button onClick={handleSubmit} className="bg-purple-500 p-2 rounded text-sm text-white">
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
