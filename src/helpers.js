const TOKEN_KEY = "jwt";
const SECOND = 1000; // one second in miliseconds

export const login = (item) => {
  const now = new Date();

  const token = {
    value: item.token,
    tokenType: item.tokenType,
    expiry: now.getTime() + item.expiresIn * SECOND,
  };

  localStorage.setItem(TOKEN_KEY, JSON.stringify(token));
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
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
  const { value } = item;

  return value;
};
