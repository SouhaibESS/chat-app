import React from "react";
import { useHistory } from "react-router-dom";
import { FiUser, FiSettings, FiLogOut, FiMessageSquare } from "react-icons/fi";
import { Link } from "react-router-dom";
import { getUser, getToken, logout } from "../../../helpers";
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
    <div className="w-1/12 border h-1/3 flex flex-col  rounded-l-lg bg-purple-400 p-6   ">
      <div className="mx-auto">
        <div>
          <img
            className=" bg-white h-16 w-16 mx-auto rounded-full mb-12 text-center border-2"
            src={user && user.avatar}
          />
        </div>
        <div className="flex mx-auto h-48 content-center p-4    justify-between flex-col mx-auto outline-none">
          <Link to="/">
            <FiMessageSquare size={28} color="white" />
          </Link>
          <Link to="/">
            <FiSettings size={28} color="white" />
          </Link>
          <Link to="/">
            <FiUser size={28} color="white" />
          </Link>
        </div>
      </div>
      <div className="mx-auto absolute bottom-0 mb-10 ml-3">
        <FiLogOut onClick={handelLogoutClick} size={28} color="white" />
      </div>
    </div>
  );
};

export default Dashboard;
