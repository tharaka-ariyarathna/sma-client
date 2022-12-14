import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import DefaultCoverImage from "../../img/cover.jpg";
import { getProfileUser } from "../../actions/UserAction";
import DefaultProfileImage from "../../img/avatar1.png";
import "./ProfileCard.css";

const ProfileCard = ({ location }) => {
  const { user } = useSelector((state) => state.Authreducer.authData.data);
  const { posts } = useSelector((state) => state.PostReducer);
  const profileUser = useSelector((state) => state.ProfileReducer.user);
  const [profileUserData, setProfileUserData] = useState(null);
  const dispatch = useDispatch() ;
  const params = useParams();
  let id = params.id;

  useEffect(() => {
    if (location !== "homePage" && id !== user._id) {
      setProfileUserData(profileUser);
    }else{
      setProfileUserData(user) ;
    }
  });

  const getUserData = () => {
    dispatch(getProfileUser(user._id)) ;
  }

  return (
    <>
      {profileUserData!==null? (<div className="profileCard">
      <div className="profileImages">
        <img
          src={
            profileUserData.coverImage
              ? profileUserData.coverImage
              : DefaultCoverImage
          }
          alt="Cover Photo"
        />
        <img
          src={
            profileUserData.profileImage
              ? profileUserData.profileImage
              : DefaultProfileImage
          }
          alt="Profile Pic"
        />
      </div>

      <div className="profileName">
        <span>{`${profileUserData.firstname} ${profileUserData.lastname}`}</span>
        <span>
          {profileUserData.worksAt ? profileUserData.worksAt : "Tell about yourself"}{" "}
        </span>
      </div>

      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>{profileUserData.followers.length}</span>
            <span>Followers</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>{profileUserData.followings.length}</span>
            <span>Followings</span>
          </div>
          {location === "profilepage" && (
            <>
              <div className="vl"></div>
              <div className="follow">
                <span>
                  {
                    posts.filter((post) => post.userId === profileUserData._id)
                      .length
                  }
                </span>
                <span>Posts</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>

      {location === "homePage" && (
        <>
          <span>
            <Link
              to={`/profile/${user._id}`}
              style={{ textDecoration: "none", color: "inherit" }}
              onClick={getUserData}
            >
              {" "}
              My Profile{" "}
            </Link>
          </span>
        </>
      )}
    </div>) : "" }
    </>
  );
};

export default ProfileCard;
