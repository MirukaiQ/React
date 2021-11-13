import React, { useState } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Login from "./Login";
import SingUp from "./SingUp";
import './style.scss'

const Router = () => {
  const [ link, setLink ] = useState("/login");
  const [ linkText, setLinkText] = useState("Login")

  const linkChanger = () => {
    if (link === "/login") {
      setLink("/singup")
      setLinkText("Sing Up")
    } 
    if (link === "/singup") {
      setLink("/login")
      setLinkText("Login")
    }
  }
  return (
    <BrowserRouter>
    <div className="header">
        <a href="https://www.squadhelp.com/" className="header-logo">
          <img src="https://www.squadhelp.com/img/logo.png" />
        </a>
        <Link to={link} onClick={linkChanger} className="header-link">{linkText}</Link>
      </div>
      <Switch>
        <Route path="/singup">
          <SingUp />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router
