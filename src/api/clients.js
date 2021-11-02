import axios from "axios";

const clients = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

export const setAuthorizationHeader = (token) => {
  clients.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export default clients;
