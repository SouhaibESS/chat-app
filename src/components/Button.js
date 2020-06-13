import React from "react";
import { motion } from "framer-motion";

const Button = (props) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      className=" rounded-full text-white font-bold  bg-purple-400 p-6 shadow-outline  "
      style={{ outline: "none" }}
    >
      {props.children}
    </motion.button>
  );
};

export default Button;
