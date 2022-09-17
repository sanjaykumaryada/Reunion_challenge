import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Header.css";
const Header = () => {
  const user = localStorage.getItem("uname");
  const navigate = useNavigate();
  const location = useLocation();
  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };
  const handleUserButton = () => {
    navigate("favourite");
  };
  return (
    <div className="main-header">
      <div className="logo-div">
        <img src={require("../asset/logo.png")} alt="" />
        <h1>Estatery</h1>
      </div>
      <div className="function-div">
        <button className="btn">Rent</button>
        <button className="btn">Buy</button>
        <button className="btn">Sell</button>
        <button className="para"> Manage property</button>
        <button className="para">Resources</button>
      </div>
      {!user ? (
        <div className="login-div">
          <button className="btn1" onClick={() => navigate("/login")}>
            Login
          </button>
          <button className="btn1">Sign up</button>
        </div>
      ) : (
        <div className="login-div">
          {location.pathname === "/favourite" ? (
            <div className="login-div">
              <button onClick={handleLogout} className="btn1">
                LogOut
              </button>
              <button onClick={() => navigate("/")} className="btn1">
                Back
              </button>
            </div>
          ) : (
            <div className="login-div">
              <button onClick={handleUserButton} className="user">
                {user[0]}
              </button>
              <button onClick={handleLogout} className="btn1">
                LogOut
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
export default Header;
