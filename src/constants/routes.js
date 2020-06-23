import { FiUser, FiSettings, FiLogOut, FiMessageSquare } from "react-icons/fi";
import React from "react";
const routes = [
  {
    name: "/",
    icon: <FiMessageSquare size={28} className="mx-auto" />,
  },
  {
    name: "contacts",
    icon: <FiUser size={28} className="mx-auto" />,
  },
  {
    name: "/profile",
    icon: <FiSettings size={28} className="mx-auto" />,
  },
];

export default routes;
