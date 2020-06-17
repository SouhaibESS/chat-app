import { API_URL } from "./config";

const TOKEN_KEY = "jwt";
const USER = "user";
const SECOND = 1000; // one second in miliseconds

const setUser = (token) => {
  fetch(`${API_URL}/user`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  })
    .then((response) => response.json())
    .then((user) => {
      localStorage.setItem(USER, JSON.stringify(user.user));
    });
};

export const login = (item) => {
  const now = new Date();

  const token = {
    value: item.token,
    tokenType: item.tokenType,
    expiry: now.getTime() + item.expiresIn * SECOND,
  };

  setUser(token.value);
  localStorage.setItem(TOKEN_KEY, JSON.stringify(token));
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER);
};

export const isLoggedIn = () => {
  const now = new Date();
  let token = localStorage.getItem(TOKEN_KEY);

  if (!token) {
    return false;
  }

  token = JSON.parse(token);

  if (token.expiry < now.getTime()) {
    logout();
    return false;
  }

  return true;
};

export const getToken = () => {
  const item = localStorage.getItem(TOKEN_KEY);
  const { value } = JSON.parse(item);

  return value;
};

export const getUser = () => {
  if (isLoggedIn()) {
    let user = localStorage.getItem(USER);
    user = JSON.parse(user);
    return user;
  }
};
