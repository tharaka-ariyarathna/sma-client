import React from "react";
import { useSelector } from "react-redux";
import {Link} from 'react-router-dom' ;
import DefaultCoverImage from "../../img/cover.jpg";
import DefaultImage from "../../img/avatar1.png";
import "./ProfileCard.css";

const ProfileCard = ({location}) => {
  const { user } = useSelector((state) => state.Authreducer.authData.data);

  console.log(location) ;

  return (
    <div className="profileCard">
      <div className="profileImages">
        <img src={DefaultCoverImage} alt="Cover Photo" />
        <img src={DefaultImage} alt="Profile Pic" />
      </div>

      <div className="profileName">
        <span>{`${user.firstname} ${user.lastname}`}</span>
        <span>{user.worksAt? user.worksAt : "Tell about yourself"} </span>
      </div>

      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>{user.followers.length}</span>
            <span>Followers</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>1</span>
            <span>Followings</span>
          </div>
          {location ==='profilepage' && (
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

      {location !=='profilepage'  && (
        <>
          <span>
            <Link to={`/profile/${user._id}`} style={{textDecoration:"none", color:"inherit"}}>  My Profile </Link>
          </span>
        </>
      )}
    </div>
  );
};

export default ProfileCard;
