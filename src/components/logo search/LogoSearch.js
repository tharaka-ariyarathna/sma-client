import React from "react";
import Logo from "../../img/logo.png";
import { Link } from "react-router-dom";
import * as Unicons from "@iconscout/react-unicons";
import "./LogoSearch.css";

const LogoSearch = () => {
  return (
    <div className="logoSearch">
      <img src={Logo} alt="" />
      <div className="search">
        <input type="text" placeholder="#Explorer" />
        <div classname="si">
          <Link to={{pathname:`search`}} state={{location:"profile"} }style={{textDecoration:"none", color:"white"}} location="search"><Unicons.UilSearch /></Link>
        </div>
      </div>
    </div>
  );
};

export default LogoSearch;
