import React, { useState } from "react";
import Logo from "../../img/logo.png";
import { Link, useLocation } from "react-router-dom";
import * as Unicons from "@iconscout/react-unicons";
import "./LogoSearch.css";

const LogoSearch = () => {
  const { pathname } = useLocation();
  const [searchData, setSearchdata] = useState("");

  const handleInputChange = (e) => {
    setSearchdata(e.target.value) ;
  };

  return (
    <div className="logoSearch">
      <img src={Logo} alt="" />
      <div className="search">
        <input
          type="text"
          placeholder="#Explorer"
          onChange={handleInputChange}
        />
        <div classname="si">
          <Link
            to={
              pathname === "/home/search"
                ? { pathname: `` }
                : { pathname: "/home/search" }
            }
            state={{ location: "profile" }}
            style={{ textDecoration: "none", color: "white" }}
            location="search"
          >
            <Unicons.UilSearch />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LogoSearch;
