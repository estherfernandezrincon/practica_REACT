import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import storage from "./utils/storage";
// import { setAuthorizationHeader } from "./api/clients";

// const token = storage.get(localStorage.getItem);
// setAuthorizationHeader(token);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
