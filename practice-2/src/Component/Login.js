import React, { useState, useEffect } from "react";
import "./login.css";
import image from "./login.png";
import users from "./users";
import swal from "sweetalert";

function Login() {
  const [uname, setUname] = useState("");
  const [pass, setPass] = useState("");
  const [isauthenticated, setAuth] = useState("false");
  // useEffect(() => {}, isauthenticated);
  var user = {
    uname: uname,
    pass: pass,
  };
  const handelSubmitLogin = (e) => {
    e.preventDefault();
    var loggedin = "false";
    for (var i = 0; i < users.length; i++) {
      if (users[i].uname === user.uname && users[i].pass === user.pass) {
        setAuth("true");
        loggedin = "true";
        swal("Login Alert", "logged in !!");
        break;
      }
    }
    if (loggedin === "false") swal("Login Alert", "uname or password is wrong");
  };
  const handelSubmitLogout = (e) => {
    e.preventDefault();
    setUname("");
    setPass("");
    setAuth("false");
    swal("Looged Out", "Thanks and come again.");
  };
  return isauthenticated === "false" ? (
    <div className="login-page">
      <div className="col-md-6">
        <img
          src={image}
          alt="img"
          className="img-fluid"
          style={{ width: "60%" }}
        />
      </div>
      <form onSubmit={handelSubmitLogin}>
        <div className="col-md-6 loginForm">
          <strong>LOGIN</strong>
          <hr />
          <div className="row">
            <label className="colorPink col-md-6">Enter username : </label>
            <input
              placeholder="Enter the username"
              value={uname}
              type="text"
              className="col-md-6"
              onChange={(e) => setUname(e.target.value)}
            />
          </div>
          <div className="row">
            <label className="col-md-6 colorPink">Enter password : </label>
            <input
              placeholder="Enter the password"
              type="password"
              value={pass}
              className="col-md-6"
              onChange={(e) => setPass(e.target.value)}
            />
          </div>
          <br />
          <div>
            <button
              type="submit"
              style={{ float: "right" }}
              className="center btn btn-cust col-md-6"
            >
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  ) : (
    <div className="colorPink container">
      <h1>Welcome {user.uname}, Mate</h1>
      <form onSubmit={handelSubmitLogout}>
        <button className="btn btn-cust">Logout</button>
      </form>
    </div>
  );
}

export default Login;
