import React from "react";
import { useHistory } from "react-router-dom";
import { Page, Button } from "../components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { logout, isLoggedIn, getToken } from "../helpers";
import { API_URL } from "../config";

const Home = () => {
  const links = ["login", "register"];
  const history = useHistory();

  const handelClick = async (event) => {
    event.preventDefault();
    if (!isLoggedIn()) {
      const token = getToken();
      const fetchedResponse = await fetch(`${API_URL}/logout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      });
      const response = await fetchedResponse.json();
      if (response.success) logout();
    }

    history.push("/login");
  };

  return (
    <Page>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.1 }}
        className="shadow-lg border rounded-lg h-full w-full bg-white"
      >
        <h1 className="text-center font-serif text-3xl mt-10 font-bold ">
          <img src={logo} alt="logo" className=" h-24 block mx-auto" />W
          <span className="text-purple-700">e</span>lcome to{" "}
          <span className="text-purple-700">Chats</span>
          <br />
          <span className="text-purple-700 text-sm">
            {" "}
            The Fatest chatApp in the world!
          </span>
        </h1>

        <div className="flex justify-between mx-auto w-2/6 mt-32">
          {links.map((link) => (
            <Link to={link}>
              <Button>
                <span>
                  {link.charAt(0).toLocaleUpperCase() + link.slice(1)}
                </span>
              </Button>
            </Link>
          ))}
          <button onClick={handelClick}>Logout</button>
        </div>
      </motion.div>
    </Page>
  );
};

export default Home;
