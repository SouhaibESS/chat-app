import Pusher from "pusher-js";
import Echo from "laravel-echo";
import { getToken, getUser } from "./helpers";
import { options } from "./config";

const pusherOptions = {
  ...options,
  auth: {
    headers: {
      Authorization: `Bearer ${getToken()}`,
      Accept: "application/json",
    },
  },
};

const user = getUser();
export const echo = new Echo(pusherOptions);
export const userChannel = echo.private(`user.${user && user.id}`);