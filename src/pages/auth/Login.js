import React from "react";
import { Page } from "../../components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
const Login = () => {
  return (
    <Page>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.2 }}
        className="shadow-lg border rounded-lg h-full w-full bg-white p-32"
      >
        <img src={logo} alt="logo" className=" h-16 block mx-auto" />
        <h1 className="text-center text-2xl font-bold font-serif text-purple-700">
          Login
        </h1>
        <form class="bg-white w-1/3 mx-auto rounded px-8 pt-6 pb-8 mb-4">
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Username
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
          <div class="mb-6">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              Password
            </label>
            <input
              class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
            />
            <p class="text-red-500 text-xs italic">Please choose a password.</p>
          </div>
          <div class="flex items-center justify-between">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign In
            </button>
            <Link
              to="/register"
              class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
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
