import React from "react";
import Home from "./pages/home page/Home";
import Profile from "./pages/profile page/Profile";
import Auth from "./pages/auth/Auth";
import Search from "./pages/search/search";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector((state) => state.Authreducer.authData);
  return (
    <div className="App">
      <div className="blur" style={{ top: "-18%", right: "0" }}></div>
      <div className="blur" style={{ top: "36%", left: "-8rem" }}></div>
      <Routes>
        <Route
          path="/"
          element={user ? <Navigate to="home" /> : <Navigate to="auth" />}
        />
        <Route
          path="/home"
          element={user ? <Home /> : <Navigate to="../auth" />}
        />
        <Route 
          path="/home/search"
          element={user ? <Search /> : <Navigate to="../auth/" />}
        />
        <Route
          path="/auth"
          element={user ? <Navigate to="../home" /> : <Auth />}
        />
        <Route
          path="/profile/:id"
          element={user ? <Profile /> : <Navigate to="../auth/" />}
        />
      </Routes>
    </div>
  );
};

export default App;

/*user? <Home /> : <Navigate to = '../auth' /> */

//Working
