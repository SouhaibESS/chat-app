export const API_URL = "http://127.0.0.1:8000/api";

export const options = {
  broadcaster: "pusher",
  key: "chat-app-key",
  cluster: "mt1",
  wsHost: "127.0.0.1",
  wsPort: 6001,
  wssPort: 6001,
  disableStats: true,
  enabledTransport: ["ws", "wss"],
  forceTLS: false,
  authEndpoint: `http://127.0.0.1:8000/broadcasting/auth`,
}