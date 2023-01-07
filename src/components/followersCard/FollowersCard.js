import React from "react";
import { followers } from '../../data/FolloersData';
import User from "../user/user";
import img1 from "../../img/avatar1.png";
import "./FollowersCard.css";

const FollowersCard = () => {
  return (
    <div className="followersCard">
      <h3>People You May Know</h3>
      {followers.map((person, id) => {
        return <User person={person} key={id} />;
      })}
    </div>
  );
};

export default FollowersCard;
