import React from "react";
import LogoSearch from "../logo search/LogoSearch";
import ProfileCard from "../profileCard/ProfileCard";
import FollowersCard from "../followersCard/FollowersCard";
import "./Profileside.css";

const Profileside = ({location}) => {
  return (
    <div className="profileside">
      <LogoSearch />
      <ProfileCard location={location}/>
      <FollowersCard />
    </div>
  );
};

export default Profileside;
