import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Spinner } from '../../components/Custom'
import { login } from "../../helpers";
import { Page } from "../../components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { API_URL } from "../../config";

const Login = () => {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validateChange = (e) => {
    const {
      target: { name, value },
    } = e;
    switch (name) {
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
          setValidEmail(true);
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
      default:
        console.error("Error: no " + name + "input");
        break;
    }
  };

  const handelSubmit = async (event) => {
    event.preventDefault();
    let data = {
      email: email,
      password: password,
    };
    data = JSON.stringify(data);

    try {
      setLoading(true);
      const fetchedResponse = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
      });
      const response = await fetchedResponse.json();
      if (!response.success) {
        setErrors({
          email: "unauthorized user",
        });
      } else {
        setEmail("");
        setPassword("");
        setErrors({});
        let item = {
          token: response.access_token,
          tokenType: response.token_type,
          expiresIn: response.expires_in,
        };

        // set the item in localstorage
        login(item);
        // redirect to homepage
        history.push("/");
      }
      setLoading(false);
    } catch (error) {
      console.error("Error: " + error);
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
          Login
        </h1>
        <form
          className="bg-white w-1/3 mx-auto rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handelSubmit}
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="email"
            >
              Username
            </label>
            <input
              className={
                errors.email
                  ? "shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  : "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              }
              name="email"
              id="email"
              type="email"
              placeholder="Email"
              value={email}
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
              name="password"
              type="password"
              placeholder="******************"
              value={password}
              onChange={validateChange}
            />
            {errors.password ? (
              <p className="text-red-500 text-xs italic">{errors.password}</p>
            ) : null}
          </div>
          <div className="flex items-center justify-between">
            {loading ? (
              <Spinner />
            ) : (
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                /* if the input values aren't valid the user can't submit the form */
                disabled={!validEmail && !validPassword}
              >
                Sign In
              </button>
            )}
            <Link
              to="/register"
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              Dont have an Account ?
            </Link>
          </div>
        </form>
      </motion.div>
    </Page>
  );
};

export default Login;
