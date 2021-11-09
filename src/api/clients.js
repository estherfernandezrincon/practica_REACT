import axios from "axios";

const clients = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

clients.interceptors.response.use((response) => response.data);

//TODO controlar mensaje de error para mostrarlo desde login

export const setAuthorizationHeader = (token) => {
  clients.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

//quitamos la clave para hacer logout

export const removeAuthorizationHeader = () => {
  delete clients.defaults.headers.common["Authorization"];
};

export default clients;
