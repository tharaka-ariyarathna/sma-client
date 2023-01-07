import React from "react";

const User = ({ person }) => {
  return (
    <div className="follower">
      <div>
        <img className="followerImage" src={person.image} alt={person.name} />
        <div className="followerName">
          <span>{person.name}</span>
          <span>@{person.username}</span>
        </div>
      </div>
      <button className="button fc-button">Follow</button>
    </div>
  );
};

export default User;
