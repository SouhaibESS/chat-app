import React from "react";
import { useHistory } from "react-router-dom";
import { FiUser, FiSettings, FiLogOut, FiMessageSquare } from "react-icons/fi";
import routes from "../../../constants/routes";
import { NavLink, Link } from "react-router-dom";
import { getUser, getToken, logout } from "../../../helpers";
import { motion } from "framer-motion";
import { API_URL } from "../../../config";

const Dashboard = () => {
  const history = useHistory();
  const user = getUser();

  const handelLogoutClick = () => {
    const token = getToken();

    fetch(`${API_URL}/logout`, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
      },
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.success) {
          logout();
          history.push("/login");
        }
      });
  };

  return (
    <div className="w-1/12 border h-1/3 flex flex-col relative  rounded-l-lg bg-purple-400 sm:hidden lg:block md:block   ">
      <div className="mx-auto w-full">
        <div className="p-2">
          <img
            className=" bg-white h-16 w-16 mx-auto rounded-full mb-12 text-center border-2"
            src={user && user.avatar}
          />
        </div>
        <div className="flex mx-auto h-48 content-center  w-full   items-center    justify-between flex-col mx-auto outline-none">
          {routes.map((route) => (
            <NavLink
              exact
              to={route.name}
              activeClassName=" bg-white  border-purple-500 text-purple-500"
              className="w-full p-2 text-white hover:bg-white hover:text-purple-500"
            >
              {route.icon}
            </NavLink>
          ))}
        </div>
      </div>
      <div className="mx-auto absolute bottom-0 text-white p-2 right-0 left-0 mb-10 w-full hover:bg-white hover:text-purple-500  ">
        <FiLogOut onClick={handelLogoutClick} size={28} className="mx-auto" />
      </div>
    </div>
  );
};

export default Dashboard;
