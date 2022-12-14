import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { UilPen } from "@iconscout/react-unicons";
import ProfileModal from "../profileModal/ProfileModal";
import * as UserApi from "../../api/UserApi";
import { logOut } from "../../actions/AuthActions";
import "./InfoCard.css";

const InfoCard = () => {
  const [modalOpened, setModalOpened] = useState(false);
  const [profileUser, setProfileUser] = useState({});

  const dispatch = useDispatch();
  const params = useParams();

  const userId = params.id;

  const { user } = useSelector((state) => state.Authreducer.authData.data);
  const profileReducerData = useSelector((state) => state.ProfileReducer.user);

  useEffect(() => {
    const fetchProfileUser = async () => {
      if (userId === user._id) {
        setProfileUser(user);
      } else {
        const profileUser = await UserApi.getUser(userId);
        setProfileUser(profileUser.data);
      }
    };

    fetchProfileUser();
  },[profileReducerData, user]);

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <div className="infocard">
      <div className="infoHead">
        <h4>Profile Info</h4>
        {profileUser._id === user._id ? (
          <div>
            <UilPen
              width="2rem"
              height="1.2rem"
              onClick={() => setModalOpened(true)}
            />
            <ProfileModal
              modalOpened={modalOpened}
              setModalOpened={setModalOpened}
              data={user}
            />
          </div>
        ) : (
          ""
        )}
      </div>
      {profileUser.relationship ? (
        <div className="info">
          <span>
            <b>Status</b>
          </span>
          <span>&nbsp;&nbsp; {profileUser.relationship}</span>
        </div>
      ) : (
        ""
      )}
      {profileUser.livesIn ? (
        <div className="info">
          <span>
            <b>Lives in</b>
          </span>
          <span>&nbsp;&nbsp; {profileUser.livesIn}</span>
        </div>
      ) : (
        ""
      )}
      {profileUser.worksAt ? (
        <div className="info">
          <span>
            <b>Works at</b>
          </span>
          <span>&nbsp;&nbsp; {profileUser.worksAt}</span>
        </div>
      ) : (
        ""
      )}
      {profileUser._id === user._id ? (
        <button className="button lo-button" onClick={handleLogOut}>
          Log Out
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default InfoCard;

/*{profileUser._id===userId || profileUser.relationship || profileUser.livesIn || profileUser.worksAt }*/
