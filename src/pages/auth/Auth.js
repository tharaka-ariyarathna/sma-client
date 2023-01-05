import React, { useState } from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { login, signUp } from "../../actions/AuthActions";

const SignUp = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.Authreducer.loading);

  if (localStorage.getItem("error")) {
    console.log(JSON.parse(localStorage.getItem("error")).data);
  }

  const [isSignedUp, setIsSignedUp] = useState(true);

  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [confirmPass, setConfirmPass] = useState(true);
  const [validPass, setValidPass] = useState(true);

  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (e.target[0].name == "firstname") {
      if (data.password.length >= 7) {
        setValidPass(true);
        if (!isSignedUp) {
          data.password === data.confirmPassword
            ? dispatch(signUp(data))
            : setConfirmPass(false);
        } else {
          dispatch(login(data));
        }
      } else {
        setValidPass(false);
      }
    } else {
      if (!isSignedUp) {
        data.password === data.confirmPassword
          ? dispatch(signUp(data))
          : setConfirmPass(false);
      } else {
        dispatch(login(data));
      }
    }
  };

  const resetForm = () => {
    setConfirmPass(true);
    setData({
      firstname: "",
      lastname: "",
      username: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="a-right">
      <form className="infoForm loginForm" onSubmit={handleFormSubmit}>
        <h3>{isSignedUp ? "Login" : "Sign Up"}</h3>
        {!isSignedUp && (
          <div>
            <input
              type="text"
              className="infoInput"
              placeholder="First Name"
              name="firstname"
              required
              autoComplete="off"
              onChange={handleInputChange}
              value={data.firstname}
            />
            <input
              type="text"
              className="infoInput"
              placeholder="Last Name"
              name="lastname"
              required
              autoComplete="off"
              onChange={handleInputChange}
              value={data.lastname}
            />
          </div>
        )}
        <div>
          <input
            type="text"
            className="infoInput"
            placeholder="Username"
            name="username"
            required
            autoComplete="off"
            onChange={handleInputChange}
            value={data.username}
          />
        </div>
        <div>
          <input
            type="password"
            className="infoInput"
            placeholder="Password"
            name="password"
            required
            onChange={handleInputChange}
            value={data.password}
          />
          {!isSignedUp && (
            <input
              type="password"
              className="infoInput"
              placeholder="Confirm Password "
              name="confirmPassword"
              required
              onChange={handleInputChange}
              value={data.confirmPassword}
            />
          )}
        </div>

        <span
          style={{
            display: validPass ? "none" : "block",
            color: "red",
            fontSize: "12px",
            margin: "5px",
            marginRight: "5%",
            alignSelf: "self-end",
          }}
        >
          ∗ Password is too short
        </span>

        <span
          style={{
            display: confirmPass ? "none" : "block",
            color: "red",
            fontSize: "12px",
            margin: "5px",
            marginRight: "5%",
            alignSelf: "self-end",
          }}
        >
          ∗ Password doesn't match"
        </span>

        <span
          style={{
            display: localStorage.getItem("error") ? "block" : "none",
            color: "red",
            fontSize: "12px",
            margin: "5px",
            marginRight: "5%",
            alignSelf: "self-end",
          }}
        >
          {JSON.parse(localStorage.getItem("error")) && !isSignedUp && JSON.parse(localStorage.getItem("error")).data ===
          "Usename already taken"
            ? "*Usename already taken"
            : "*Incorrect Username or Password"}
        </span>

        <div>
          <span
            style={{ fontSize: "12px", cursor: "pointer" }}
            onClick={() => {
              setIsSignedUp((prev) => !prev);
              resetForm();
              localStorage.removeItem("error") ;
            }}
          >
            {isSignedUp
              ? "Don't have an account, Sign In!"
              : "Already have an account. Login!"}
          </span>
        </div>

        <button className="button infoButton" type="submit" disabled={loading}>
          {loading ? "Loading" : isSignedUp ? "Login" : "Sign up"}
        </button>
      </form>
    </div>
  );
};

const auth = () => {
  return (
    <div className="auth">
      <div className="a-left">
        <img src={Logo} />
        <div className="webname">
          <h1>SOCIAL MEDIA</h1>
          <h6>Feel seconds away from your friends</h6>
        </div>
      </div>

      <SignUp />
    </div>
  );
};

export default auth;
