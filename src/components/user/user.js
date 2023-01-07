import React from "react";
import defaultProfileImage from "../../img/avatar1.png";
import { followUser } from "../../actions/UserAction";
import { useDispatch } from "react-redux";

const User = ({ person, user }) => {
  const dispatch = useDispatch() ;

  const handleFollow = (e) => {
    dispatch(followUser(person._id, user)) ;
  }

  return (
    <div className="follower">
      <div>
        <img
          className="followerImage"
          src={person.profileImage ? person.profileImage : defaultProfileImage}
          alt={person.name}
        />
        <div className="followerName">
          <span>{`${person.firstname} ${person.lastname}`}</span>
          <span>@{person.username}</span>
        </div>
      </div>
      <button className="button fc-button" onClick={handleFollow}>Follow</button>
    </div>
  );
};

export default User;
