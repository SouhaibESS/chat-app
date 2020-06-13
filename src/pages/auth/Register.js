import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { API_URL } from "../../config";
import { Page } from "../../components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
const Register = () => {
  const history = useHistory();

  const [name, setName] = useState("");
  const [nameValid, setNameValid] = useState(false);
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validateChange = (event) => {
    const {
      target: { name, value },
    } = event;
    switch (name) {
      case "name":
        setName(value);
        if (value.length < 6) {
          setErrors({
            ...errors,
            name: "name must be 6 characters long",
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
      case "password":
        setPassword(value);
        if (value.length < 6) {
          setErrors({
            ...errors,
            password: "password must be 6 characters long",
          });
        } else if (!value || value.length > 6) {
          setErrors({
            ...errors,
            password: "",
          });
          setValidPassword(true);
        }
        break;
      case "passwordConfirmation":
        setPasswordConfirmation(value);
        if (value != password) {
          setErrors({
            ...errors,
            passwordConfirmation:
              "password confirmation don't match password value",
          });
          setValidPassword(false);
        } else {
          setErrors({
            ...errors,
            passwordConfirmation: "",
          });
          setValidPassword(true);
        }
        break;
      default:
        console.error("Error: no " + name + "input");
        break;
    }
  };

  const handelSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    let data = {
      name: name,
      email: email,
      password: password,
      password_confirmation: passwordConfirmation,
    };
    data = JSON.stringify(data);
    const fetchedResponse = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    });
    const response = await fetchedResponse.json();

    if (!response.success) {
      setErrors(response.message);
      setLoading(false);
    } else {
      setName("");
      setEmail("");
      setPassword("");
      setPasswordConfirmation("");
      setErrors({});

      setLoading(false);

      // redirect to login page
      history.push("/login");
    }
  };

  return (
    <Page>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.1 }}
        className="shadow-lg border rounded-lg h-full w-full bg-white p-32"
      >
        <img src={logo} alt="logo" className=" h-16 block mx-auto" />
        <h1 className="text-center text-2xl font-bold font-serif text-purple-700">
          Register
        </h1>
        <form
          onSubmit={handelSubmit}
          className="bg-white w-1/3 mx-auto rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Username
            </label>
            <input
              className={
                errors.name
                  ? "shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  : "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              }
              id="username"
              type="text"
              placeholder="Username"
              name="name"
              value={name}
              onChange={validateChange}
            />
            {errors.name ? (
              <p className="text-red-500 text-xs italic">{errors.name}</p>
            ) : null}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Email
            </label>
            <input
              className={
                errors.email
                  ? "shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  : "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              }
              id="email"
              type="text"
              placeholder="Email"
              value={email}
              name="email"
              onChange={validateChange}
            />
            {errors.email ? (
              <p className="text-red-500 text-xs italic">{errors.email}</p>
            ) : null}
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              Password
            </label>
            <input
              className={
                errors.password
                  ? "shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  : "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              }
              id="password"
              type="password"
              placeholder="******************"
              name="password"
              value={password}
              onChange={validateChange}
            />
            {errors.password ? (
              <p className="text-red-500 text-xs italic">{errors.password}</p>
            ) : null}
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="passwordConfirmation"
            >
              Confirm Password
            </label>
            <input
              className={
                errors.passwordConfirmation
                  ? "shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  : "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              }
              id="passwordConfirmation"
              type="password"
              placeholder="******************"
              name="passwordConfirmation"
              value={passwordConfirmation}
              onChange={validateChange}
            />
            {errors.passwordConfirmation ? (
              <p className="text-red-500 text-xs italic">
                {errors.passwordConfirmation}
              </p>
            ) : null}
          </div>
          <div className="flex items-center justify-between">
            {loading ? (
              // TODO SPINNER <---------------------------------------------------------------
              "loading"
            ) : (
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                /* if the input values aren't valid the user can't submit the form */
                disabled={!emailValid && !nameValid && !validPassword}
              >
                Sign In
              </button>
            )}
            <Link
              to="/login"
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              Already Registerd ?
            </Link>
          </div>
        </form>
      </motion.div>
    </Page>
  );
};

export default Register;
