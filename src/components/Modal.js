import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
const Modal = ({ children, show, changeShow }) => {
  return show ? (
    <AnimatePresence>
      <motion.div
        key="modal"
        initial={{ width: 20, margin: "auto 0" }}
        animate={{ width: "100vw" }}
        transition={{ duration: 0.2 }}
        exit={{ width: 0 }}
        className="  bg-gray-400 h-screen w-screen  absolute z-40 top-0 left-0 p-10 hidden "
        style={{ background: "rgba(0,0,0,0.7)" }}
      >
        <div className="w-5/12 relative right-0 left-0 mx-auto bg-white  mt-16 rounded opacity-85 p-3 z-50">
          {children}
        </div>
      </motion.div>
    </AnimatePresence>
  ) : null;
};

export default Modal;
