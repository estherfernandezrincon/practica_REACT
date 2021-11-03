import "./App.css";
import "./login/loginPage.css";
import React, { Fragment } from "react";
//import MainPage from "./components/main/MainPage";
import Login from "./login/Login";

function App() {
  return (
    //aqui metemos Fragment en lugar de los div para envolver todo
    <Fragment>
      <h1>Welcome to NODEPOP</h1>
      <Login />
    </Fragment>
  );
}

export default App;
