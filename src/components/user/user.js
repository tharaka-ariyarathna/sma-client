import React from "react";
import defaultProfileImage from "../../img/avatar1.png";
import { followUser, getProfileUser, unfollowUser } from "../../actions/UserAction";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getUser } from "../../api/UserApi";

const User = ({ person, user, friends }) => {
  const dispatch = useDispatch();

  const handleFollow = (e) => {
    friends
      ? dispatch(unfollowUser(person._id, user))
      : dispatch(followUser(person._id, user));
  };

  const getUserData = async () => {
    dispatch(getProfileUser(person._id)) ;
  };

  return (
    <div className="follower">
      <div>
        <img
          className="followerImage"
          src={person.profileImage ? person.profileImage : defaultProfileImage}
          alt={person.name}
        />
        <div className="followerName">
          <span>
            <Link
              onClick={getUserData}
              to={`/profile/${person._id}`}
              style={{ textDecoration: "none", color: "black" }}
            >{`${person.firstname} ${person.lastname}`}</Link>
          </span>
          <span>@{person.username}</span>
        </div>
      </div>
      <button className="button fc-button-following" onClick={handleFollow}>
        {friends ? "unfollow" : "follow"}
      </button>
    </div>
  );
};

export default User;
