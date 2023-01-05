import React from "react";
import { useSelector } from "react-redux";
import DefaultCoverImage from "../../img/cover.jpg";
import DefaultImage from "../../img/avatar1.png";
import "./ProfileCard.css";

const ProfileCard = () => {
  const { user } = useSelector((state) => state.Authreducer.authData.data);

  const isInProfile = true;

  return (
    <div className="profileCard">
      <div className="profileImages">
        <img src={ user.coverImage? user.coverImage : DefaultCoverImage} alt="Cover Photo" />
        <img src={ user.profileImage? user.profileImage : DefaultImage} alt="Profile Pic" />
      </div>

      <div className="profileName">
        <span>Katie Wilson</span>
        <span>Professional Skater </span>
      </div>

      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>6890</span>
            <span>Followers</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>1</span>
            <span>Followings</span>
          </div>
          {isInProfile && (
            <>
              <div className="vl"></div>
              <div className="follow">
                <span>4</span>
                <span>Posts</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>

      {!isInProfile && (
        <>
          <span>My profile</span>
        </>
      )}
    </div>
  );
};

export default ProfileCard;
