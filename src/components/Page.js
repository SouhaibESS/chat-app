import React from "react";
import { motion } from "framer-motion";
const Page = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className=" bg-purple-400 h-screen w-screen p-2"
    >
      {props.children}
    </motion.div>
  );
};

export default Page;
