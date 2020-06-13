import React from "react";
import { Page, Button } from "../components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { Spinner } from "../components/Custom";

const Home = () => {
  const links = ["login", "register"];

  return (
    <Page>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.2 }}
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
          <Spinner />
        </div>
      </motion.div>
    </Page>
  );
};

export default Home;
