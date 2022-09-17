import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import users from "../asset/user.json";
import Footer from "./Footer";
import Header from "./Header";
import "./Login.css";

const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: ""
  });
  const navigate = useNavigate();

  const login = async (user) => {
    const dbusername = users.filter((u) => {
      return user.username === u.username;
    });
    const dbpassword = users.filter((u) => {
      return user.password === u.password;
    });

    const password = Object.values(dbpassword);
    let uname;
    let pass;
    for (let key of password) {
      uname = key.username;
      pass = key.password;
    }
    if (dbusername.length > 0 && dbpassword.length > 0) {
      persistLogin(uname, pass);
      navigate("/");
    } else {
      prompt("Invalid Credential");
    }
  };
  const persistLogin = (uname, pass) => {
    localStorage.setItem("uname", uname);
    localStorage.setItem("pass", pass);
  };
  return (
    <div className="main-login-div">
      <Header />
      <div className="form">
        <div className="content">
          <div className="inside-login">
            <h2 className="title">Login</h2>
            <input
              id="username"
              name="username"
              placeholder="Enter username"
              value={user.username}
              minLength="4"
              required
              onChange={(e) => setUser({ ...user, username: e.target.value })}
            />
            <input
              id="password"
              name="password"
              type="password"
              required
              minLength="5"
              placeholder="Enter Password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />

            <button className="button" onClick={() => login(user)}>
              {" "}
              Login
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
